'use client';
import { useEffect, useRef, type CSSProperties } from 'react';

interface WpProps {
  left?: string;
  right?: string;
  top?: string;
  bottom?: string;
  /** Radius of a small loop the string makes around this waypoint. */
  loop?: number;
  /** Draw the starting dot here. */
  start?: boolean;
  className?: string;
}

/**
 * Waypoint for the orange string. Place it inside any `position: relative` parent;
 * the string passes through all waypoints in document order.
 */
export function Wp({ left, right, top, bottom, loop, start, className = '' }: WpProps) {
  const style: CSSProperties = { left, right, top, bottom };
  return (
    <i
      className={`th ${className}`}
      style={style}
      data-loop={loop ? String(loop) : undefined}
      data-start={start ? '1' : undefined}
      aria-hidden="true"
    />
  );
}

interface Pt { x: number; y: number; loop: number; start: boolean }

/** One orange string that draws itself down the page as you scroll. */
export function ThreadLayer() {
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = ref.current;
    const main = svg?.parentElement;
    if (!svg || !main) return;
    const path = svg.querySelector<SVGPathElement>('path');
    const dot = svg.querySelector<SVGCircleElement>('.td');
    const ring = svg.querySelector<SVGCircleElement>('.tr');
    if (!path || !dot || !ring) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let ym: number[] = [];
    let ls: number[] = [];
    let total = 0;
    let top = 0;
    let cur = 0;
    let target = 0;
    let started = false;
    let raf = 0;
    let rb = 0;
    const f = (n: number) => Math.round(n * 10) / 10;

    const lenAt = (yv: number): number => {
      const n = ym.length;
      if (n < 2) return 0;
      if (yv <= (ym[0] ?? 0)) return 0;
      if (yv >= (ym[n - 1] ?? 0)) return total;
      let i = 0;
      while (i < n - 2 && yv >= (ym[i + 1] ?? 0)) i++;
      const a = ym[i] ?? 0;
      const span = (ym[i + 1] ?? a) - a;
      const t = span > 0 ? (yv - a) / span : 1;
      const l0 = ls[i] ?? 0;
      return l0 + ((ls[i + 1] ?? l0) - l0) * t;
    };

    const paint = () => {
      path.style.strokeDashoffset = String(total - cur);
      dot.style.opacity = started ? '1' : '0';
      if (cur > 2 && !reduce) {
        const p = path.getPointAtLength(cur);
        ring.setAttribute('cx', String(f(p.x)));
        ring.setAttribute('cy', String(f(p.y)));
        ring.style.opacity = cur >= total - 1 ? '0' : '1';
      } else {
        ring.style.opacity = '0';
      }
    };

    const frame = () => {
      raf = 0;
      if (Math.abs(target - cur) < 0.6) cur = target;
      else {
        cur += (target - cur) * 0.12;
        raf = requestAnimationFrame(frame);
      }
      paint();
    };

    const aim = () => {
      target = started ? lenAt(window.scrollY + window.innerHeight * 0.92 - top) : 0;
      if (reduce) cur = target;
      if (!raf) raf = requestAnimationFrame(frame);
    };

    const build = () => {
      const mr = main.getBoundingClientRect();
      const sy = window.scrollY;
      top = mr.top + sy;
      const pts: Pt[] = Array.from(main.querySelectorAll<HTMLElement>('i.th'))
        .filter((e) => e.offsetParent !== null)
        .map((e) => {
          const r = e.getBoundingClientRect();
          return { x: r.left - mr.left, y: r.top + sy - top, loop: Number(e.dataset.loop ?? 0), start: e.dataset.start === '1' };
        });
      const w = main.clientWidth;
      const h = main.offsetHeight;
      svg.setAttribute('viewBox', `0 0 ${w} ${h}`);
      svg.style.width = `${w}px`;
      svg.style.height = `${h}px`;
      const first = pts[0];
      if (!first || pts.length < 2) return;
      let d = `M${f(first.x)} ${f(first.y)}`;
      ym = [first.y];
      ls = [0];
      path.setAttribute('d', d);
      for (let i = 0; i < pts.length - 1; i++) {
        const p0 = pts[Math.max(0, i - 1)] as Pt;
        const p1 = pts[i] as Pt;
        const p2 = pts[i + 1] as Pt;
        const p3 = pts[Math.min(pts.length - 1, i + 2)] as Pt;
        d += `C${f(p1.x + (p2.x - p0.x) / 6)} ${f(p1.y + (p2.y - p0.y) / 6)} ${f(p2.x - (p3.x - p1.x) / 6)} ${f(p2.y - (p3.y - p1.y) / 6)} ${f(p2.x)} ${f(p2.y)}`;
        if (p2.loop) d += `a${p2.loop} ${p2.loop} 0 1 1 0 ${2 * p2.loop}a${p2.loop} ${p2.loop} 0 1 1 0 ${-2 * p2.loop}`;
        path.setAttribute('d', d);
        ls.push(path.getTotalLength());
        ym.push(Math.max(ym[ym.length - 1] ?? 0, p2.y + (p2.loop ? 2 * p2.loop : 0)));
      }
      total = ls[ls.length - 1] ?? 0;
      path.style.strokeDasharray = `${total} ${total}`;
      dot.setAttribute('cx', String(f(first.x)));
      dot.setAttribute('cy', String(f(first.y)));
      dot.style.display = first.start ? '' : 'none';
      target = started ? lenAt(window.scrollY + window.innerHeight * 0.92 - top) : 0;
      cur = target;
      paint();
    };

    const start = () => {
      if (started) return;
      started = true;
      aim();
    };
    const onScroll = () => {
      if (started) aim();
    };
    const schedule = () => {
      cancelAnimationFrame(rb);
      rb = requestAnimationFrame(build);
    };

    build();
    if (document.documentElement.dataset.intro === 'done' || reduce) start();
    const fallback = window.setTimeout(start, 6500);
    window.addEventListener('intro-done', start);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', schedule);
    const ro = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(schedule) : null;
    ro?.observe(main);
    void document.fonts?.ready.then(schedule);

    return () => {
      window.clearTimeout(fallback);
      window.removeEventListener('intro-done', start);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', schedule);
      ro?.disconnect();
      cancelAnimationFrame(raf);
      cancelAnimationFrame(rb);
    };
  }, []);

  return (
    <svg ref={ref} className="thread" aria-hidden="true">
      <path d="" />
      <circle className="td" r="6" />
      <circle className="tr" r="9" />
    </svg>
  );
}
