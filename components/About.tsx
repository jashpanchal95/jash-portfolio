import { Head } from './Head';
import { Reveal } from './Reveal';
import { Wp } from './Thread';
import { TRAITS } from '@/lib/content';

export function About() {
  return (
    <section className="sec dk" id="about" data-nav="about">
      <div className="wrap">
        <Wp className="top" left="92%" top="-3.8rem" loop={16} />
        <Head label="About" title="More curious than conventional." variant="serif" />
        <div className="two rel">
          <Wp className="dsk" left="41.5%" top="-2rem" />
          <Wp className="dsk" left="41.5%" top="104%" />
          <Reveal>
            <blockquote className="q">I may not know every answer, but I know how to find one.</blockquote>
          </Reveal>
          <Reveal className="lead">
            <p>Questions are what get me moving. I like finding out why something works, trying the ideas most people skip, and spotting when two unrelated subjects are quietly describing the same thing.</p>
            <p>My mind leans towards logic and machines, yet it keeps wandering into art, science and whatever else sparks interest. I would rather travel between fields than settle in one.</p>
            <p>Learning never feels finished to me, and the richest ground tends to sit where unlike disciplines meet.</p>
          </Reveal>
        </div>
        <div className="boxes">
          <Wp left="50%" top="-2rem" />
          {TRAITS.map((t, i) => (
            <Reveal key={t.title} className="box" delay={(i % 2) * 120}>
              <Wp className={i % 2 === 0 ? 'mr' : 'ml'} top="50%" loop={i === 2 || i === 5 ? 14 : undefined} />
              <span className="tag">{t.tag}</span>
              <h3>{t.title}</h3>
              <p>{t.text}</p>
            </Reveal>
          ))}
          <Wp left="50%" bottom="-4rem" />
        </div>
      </div>
    </section>
  );
}
