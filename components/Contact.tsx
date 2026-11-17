import { Head } from './Head';
import { Reveal } from './Reveal';
import { Wp } from './Thread';
import { SITE } from '@/lib/content';

export function Contact() {
  return (
    <section className="sec lt" id="contact" data-nav="contact">
      <div className="wrap">
        <Wp className="top" left="90%" top="-3.8rem" loop={16} />
        <Head label="Contact" title="Have something interesting in mind?" variant="disp" />
        <div className="two rel">
          <Wp className="dsk" left="41.5%" top="-1.5rem" />
          <Wp className="dsk" left="41.5%" top="104%" />
          <Reveal>
            <p className="lead">
              Whether it’s an interesting idea, a challenging problem, a collaboration, or simply a good conversation, I’m always open to exploring something new.
            </p>
          </Reveal>
          <div className="soc">
            <Reveal className="sc">
              <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 32 32" aria-hidden="true">
                  <rect x="3" y="3" width="26" height="26" rx="5" />
                  <path d="M10 14v8M10 10v.5M15 22v-8M15 17.5c0-2 1.5-3.5 3.5-3.5s3.5 1.5 3.5 3.5V22" />
                </svg>
                <span><b>LinkedIn</b><small>Let’s connect</small></span>
                <i aria-hidden="true">↗</i>
              </a>
            </Reveal>
            <Reveal className="sc" delay={120}>
              <a href={SITE.instagram} target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 32 32" aria-hidden="true">
                  <rect x="3" y="3" width="26" height="26" rx="8" />
                  <circle cx="16" cy="16" r="6" />
                  <circle cx="23" cy="9" r=".8" />
                </svg>
                <span><b>Instagram</b><small>@jashpanchal.in</small></span>
                <i aria-hidden="true">↗</i>
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
