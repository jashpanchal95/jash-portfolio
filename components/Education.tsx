'use client';
import { useEffect, useRef } from 'react';
import { Head } from './Head';
import { Wp } from './Thread';
import { EDUCATION } from '@/lib/content';

const SVG_NS = 'http://www.w3.org/2000/svg';
const clamp = (v: number, a: number, b: number) => Math.max(a, Math.min(b, v));

/**
 * Education as a vertical journey: a bar fills and a diamond travels down it while an orange
 * string wraps each milestone. Geometry is measured once per resize; scrolling only does maths.
 */
export function Education() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const svg = root.querySelector<SVGSVGElement>('.es');
    const bar = root.querySelector<HTMLElement>('.bar');
    const fill = root.querySelector<HTMLElement>('.bar i');
    const mark = root.querySelector<HTMLElement>('.bar b');
    const items = Array.from(root.querySelectorAll<HTMLElement>('.en'));
    if (!svg || !bar || !fill || !mark || items.length < 2) return;

    const fillEl: HTMLElement = fill;
    const markEl: HTMLElement = mark;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let nodes: number[] = [];
    let marks: number[] = [];
    let strLen = 0;
    let top0 = 0;
    let path: SVGPathElement | null = null;
    let dots: SVGCircleElement[] = [];
    let raf = 0;

    const build = () => {
      const rb = root.getBoundingClientRect();
      top0 = rb.top + window.scrollY;
      const w = root.clientWidth;
      const h = root.offsetHeight;
      const small = w < 700;
      const X = small ? 20 : 34;
      const R = small ? 14 : 20;
      const A = small ? 14 : 24;
      nodes = items.map((e) => e.getBoundingClientRect().top - rb.top + 46);
      const first = nodes[0] ?? 0;
      const last = nodes[nodes.length - 1] ?? 0;
      let d = `M${X} ${first - 70}L${X} ${first - R}`;
      const prefixes: string[] = [];
      let circles = '';
      nodes.forEach((y, i) => {
        if (i > 0) {
          const prev = nodes[i - 1] ?? 0;
          const g = y - R - (prev + R);
          const dir = i % 2 ? 1 : -1;
          d += `C${X + A * dir} ${prev + R + g * 0.3} ${X - A * dir} ${prev + R + g * 0.7} ${X} ${y - R}`;
        }
        d += `A${R} ${R} 0 0 1 ${X} ${y + R}A${R} ${R} 0 0 1 ${X} ${y - R}A${R} ${R} 0 0 1 ${X} ${y + R}`;
        prefixes.push(d);
        circles += `<circle class="nd" cx="${X}" cy="${y}" r="6"/>`;
      });
      d += `L${X} ${last + R + 70}`;
      svg.setAttribute('viewBox', `0 0 ${w} ${h}`);
      svg.innerHTML = `<path/>${circles}`;
      path = svg.querySelector<SVGPathElement>('path');
      dots = Array.from(svg.querySelectorAll<SVGCircleElement>('.nd'));
      if (!path) return;
      marks = prefixes.map((p) => {
        path?.setAttribute('d', p);
        return path ? path.getTotalLength() : 0;
      });
      path.setAttribute('d', d);
      strLen = path.getTotalLength();
      path.style.strokeDasharray = `${strLen} ${strLen}`;
      bar.style.left = `${X - 0.5}px`;
      bar.style.top = `${first}px`;
      bar.style.height = `${last - first}px`;
      update();
    };

    const lengthAt = (pp: number): number => {
      const n = nodes.length;
      if (pp <= -0.35) return 0;
      const m0 = marks[0] ?? 0;
      if (pp < 0) return (m0 * (pp + 0.35)) / 0.35;
      if (pp >= 1) return strLen;
      const fpos = pp * (n - 1);
      const i = Math.min(Math.floor(fpos), n - 2);
      const a = marks[i] ?? 0;
      return a + ((marks[i + 1] ?? a) - a) * (fpos - i);
    };

    function update() {
      raf = 0;
      if (!path || nodes.length < 2) return;
      const n = nodes.length;
      const first = nodes[0] ?? 0;
      const last = nodes[n - 1] ?? 0;
      const y = window.scrollY;
      const a = top0 + first - y;
      const b = top0 + last - y;
      const pp = reduce ? 1 : (window.innerHeight * 0.6 - a) / (b - a);
      const p = clamp(pp, 0, 1);
      fillEl.style.transform = `scaleY(${p})`;
      markEl.style.transform = `translate(-50%, ${p * (last - first)}px) rotate(${45 + p * 360}deg)`;
      path.style.strokeDashoffset = String(strLen - lengthAt(pp));
      items.forEach((e, i) => {
        const on = reduce || pp >= i / (n - 1) - 0.02;
        e.classList.toggle('on', on);
        dots[i]?.classList.toggle('on', on);
      });
    }

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    const ro = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(() => build()) : null;
    ro?.observe(root);
    window.addEventListener('scroll', onScroll, { passive: true });
    void document.fonts?.ready.then(build);
    build();
    return () => {
      ro?.disconnect();
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="sec lt" id="education" data-nav="about">
      <div className="wrap">
        <Wp className="top" left="84%" top="-3.8rem" loop={16} />
        <Head label="Education" title="Learning the rules first." variant="garam" />
        <div className="edu" ref={rootRef}>
          <Wp className="dsk" left="80%" top="4%" />
          <Wp className="dsk" left="92%" top="26%" loop={16} />
          <Wp className="dsk" left="72%" top="50%" />
          <Wp className="dsk" left="90%" top="72%" loop={16} />
          <Wp className="dsk" left="78%" top="98%" />
          <svg className="es" aria-hidden="true" />
          <div className="bar" aria-hidden="true">
            <i />
            <b />
          </div>
          <ol className="el">
            {EDUCATION.map((m) => (
              <li key={m.title} className="en">
                <span className="tag">{m.tag}</span>
                <h3>{m.title}</h3>
                {m.lines?.map((l, i) => (
                  <p key={l} className={i === 2 ? 'cur' : undefined}>{l}</p>
                ))}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
