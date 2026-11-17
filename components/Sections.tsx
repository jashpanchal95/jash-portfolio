import type { ReactNode } from 'react';
import { Head } from './Head';
import { Reveal } from './Reveal';
import { Wp } from './Thread';
import { EXPERIENCE, PROJECTS, WORKSHOP, SKILLS, INTERESTS, SITE, type IconKey } from '@/lib/content';

export function Experience() {
  return (
    <section className="sec dk" id="experience" data-nav="experience">
      <div className="wrap">
        <Wp className="top" left="18%" top="-3.8rem" loop={16} />
        <Head label="Experience" title="Learning by doing the work." variant="disp" />
        <div className="tl rel">
          <Wp className="dsk" left="41%" top="-1.5rem" />
          <Wp className="dsk" left="43.5%" top="50%" loop={14} />
          <Wp className="dsk" left="41%" top="102%" />
          {EXPERIENCE.map((r) => (
            <Reveal key={r.title} className="role">
              <div>
                <p className="yr">{r.year}</p>
                <p className="tag">{r.meta}</p>
              </div>
              <div>
                <h3>{r.title}</h3>
                <p className="subt">{r.sub}</p>
                <ul>
                  {r.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
                {r.note && <p className="note">{r.note}</p>}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Projects() {
  return (
    <>
      <section className="sec lt" id="projects" data-nav="projects">
        <div className="wrap">
          <Wp className="top" left="90%" top="-3.8rem" loop={16} />
          <Head label="Projects" title="Ideas are interesting. Making them real is better." variant="serif" />
          <div className="pl rel">
            <Wp className="dsk" left="68%" top="22%" />
            <Wp className="dsk" left="58%" top="56%" />
            <Wp className="dsk" left="84%" top="80%" loop={16} />
            {PROJECTS.map((p) => (
              <Reveal key={p.title} className="pr">
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </div>
                <span className="tag">Demo</span>
              </Reveal>
            ))}
          </div>
          <div className="wk rel">
            <Wp className="dsk" left="50%" top="-3rem" />
            <Wp className="dsk" left="50%" top="40%" />
            <Wp className="dsk" left="50%" top="104%" />
            {WORKSHOP.map((w) => (
              <Reveal key={w.title} className="wb">
                <span className="tag">{w.label}</span>
                <h3>{w.title}</h3>
                <p>{w.text}</p>
                <ul>
                  {w.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="band dk" aria-label="A note on honesty">
        <div className="wrap">
          <Wp className="dsk" left="90%" top="30%" loop={20} />
          <Reveal>
            <p className="pm">
              Nothing here is dressed up. Nothing is inflated. When it says experiment, it means experiment.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}

export function Skills() {
  return (
    <section className="sec dk" id="skills" data-nav="skills">
      <div className="wrap">
        <Wp className="top" left="10%" top="-3.8rem" loop={16} />
        <Head label="Skills" title="Tools are just the beginning." variant="disp" />
        <div className="rel">
          <Wp className="dsk" left="88%" top="6%" />
          <Wp className="dsk" left="76%" top="30%" loop={16} />
          <Wp className="dsk" left="92%" top="52%" />
          <Wp className="dsk" left="80%" top="74%" loop={16} />
          <Wp className="dsk" left="90%" top="98%" />
          {SKILLS.map((s) => (
            <Reveal key={s.name} className="skr">
              <div>
                <h3>{s.name}</h3>
                <p>{s.text}</p>
              </div>
              <ul className="chips">
                {s.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
        <p className="tag lv">Self-reported level: Intermediate across these areas</p>
      </div>
    </section>
  );
}

export function Recognition() {
  return (
    <section className="sec lt" id="recognition" data-nav="skills">
      <div className="wrap">
        <Wp className="top" left="88%" top="-3.8rem" loop={16} />
        <Head label="Recognition" title="Showing up and learning." variant="garam" />
        <div className="ev rel">
          <Wp className="dsk" left="50%" top="-4%" />
          <Wp className="dsk" left="50%" top="104%" />
          <Reveal className="card">
            <div>
              <span className="tag">Certification, issued 11 July 2026</span>
              <h3>Getting Started with Generative AI</h3>
              <p>IBM SkillsBuild</p>
            </div>
            <a className="btn" href={SITE.credly} target="_blank" rel="noopener noreferrer">
              Verify credential
            </a>
          </Reveal>
          <Reveal className="card" delay={120}>
            <div>
              <span className="tag">Competition, 2026</span>
              <h3>Smart India Hackathon</h3>
              <p>Participant</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const ICONS: Record<IconKey, ReactNode> = {
  camera: (<><rect x="6" y="18" width="52" height="34" rx="6" /><circle cx="32" cy="35" r="10" /><path d="M22 18l4-8h12l4 8" /></>),
  atom: (<><ellipse cx="32" cy="32" rx="26" ry="10" /><ellipse cx="32" cy="32" rx="26" ry="10" transform="rotate(60 32 32)" /><ellipse cx="32" cy="32" rx="26" ry="10" transform="rotate(120 32 32)" /><circle cx="32" cy="32" r="3" /></>),
  spark: <path d="M32 6l6 20 20 6-20 6-6 20-6-20-20-6 20-6z" />,
  growth: (<><path d="M8 52h48M12 42l14-14 10 8 18-22" /><path d="M42 14h12v12" /></>),
  overlap: (<><circle cx="24" cy="32" r="16" /><circle cx="40" cy="32" r="16" /></>),
  film: (<><rect x="6" y="24" width="52" height="32" rx="3" /><path d="M6 24l9-14h10l-9 14M22 24l9-14h10l-9 14M38 24l9-14h10l-9 14" /></>),
  compass: (<><circle cx="32" cy="32" r="24" /><path d="M43 21l-6 16-16 6 6-16z" /></>),
};

export function Interests() {
  return (
    <section className="sec dk" id="interests" data-nav="skills">
      <div className="wrap">
        <Wp className="top" left="14%" top="-3.8rem" loop={16} />
        <Head label="Beyond tech" title="Not limited to code." variant="serif" />
        <div className="frames rel">
          <Wp className="d4" left="75%" top="-3%" />
          <Wp className="d4" left="75%" top="50%" />
          <Wp className="d4" left="75%" top="103%" />
          <Wp className="d2" left="50%" top="-3%" />
          <Wp className="d2" left="50%" top="50%" />
          <Wp className="d2" left="50%" top="103%" />
          {INTERESTS.map((it, i) => (
            <Reveal key={it.title} className={`fr${it.wide ? ' wide' : ''}`} delay={(i % 4) * 90}>
              <svg viewBox="0 0 64 64" aria-hidden="true">{ICONS[it.icon]}</svg>
              <div>
                <h3>{it.title}</h3>
                <p>{it.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
