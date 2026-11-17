import { Reveal } from './Reveal';
import { Wp } from './Thread';
import { STATEMENT } from '@/lib/content';

/** Three full-width rows. On hover, a row swaps black and white. */
export function Statement() {
  return (
    <section className="st lt" id="statement" aria-label="Curious by nature. Multidisciplinary by interest. Technological by direction.">
      <div className="wrap">
        {STATEMENT.map((row, i) => (
          <Reveal key={row.k} className="mask" delay={i * 120}>
            <div className="srow">
              {i === 0 && <Wp left="64%" top="50%" loop={18} />}
              {i === 1 && <Wp left="98%" top="50%" />}
              {i === 2 && <Wp left="45%" top="50%" loop={20} />}
              <span className="rm">
                <span className="rt">{row.k}</span>
              </span>
              <span className="sr">{row.r}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
