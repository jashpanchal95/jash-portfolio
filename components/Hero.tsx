import { Wp } from './Thread';
import { css } from '@/lib/util';

/** Opening scene: four heavy lines with the orange string looping through the letters. */
export function Hero() {
  return (
    <section className="hero dk" id="home" data-nav="home">
      <div className="hero-in">
        <div className="ht">
          <Wp left="1.5%" top="-9%" start />
          <Wp left="30%" top="-7%" />
          <Wp left="66%" top="14%" loop={22} />
          <Wp left="28%" top="33%" />
          <Wp left="2%" top="50%" loop={22} />
          <Wp left="40%" top="67%" />
          <Wp left="93%" top="62%" />
          <Wp left="88%" top="87%" loop={22} />
          <Wp left="95%" top="114%" />
          <h1 className="h1">
            <span className="rise" style={css({ '--d': '.05s' })}>I don’t know</span>
            <span className="rise" style={css({ '--d': '.15s' })}>everything.</span>
            <span className="rise" style={css({ '--d': '.25s' })}>But I know how to</span>
            <span className="rise" style={css({ '--d': '.35s' })}>figure things out.</span>
          </h1>
        </div>
        <div className="hb rise" style={css({ '--d': '.6s' })}>
          <div>
            <p className="sub">A curious mind exploring technology, ideas, creativity, and everything in between.</p>
            <ul className="tags">
              <li>Computer Science Engineering student</li>
              <li>AI &amp; ML specialisation</li>
              <li>Multidisciplinary technology enthusiast</li>
            </ul>
          </div>
          <a className="cue" href="#statement">
            Scroll to follow the string
            <svg viewBox="0 0 12 18" width="12" height="18" aria-hidden="true">
              <path d="M6 0v16M1 11l5 6 5-6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
