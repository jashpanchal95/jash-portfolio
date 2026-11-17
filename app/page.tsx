import { Intro } from '@/components/Intro';
import { JsFlag } from '@/components/JsFlag';
import { Nav } from '@/components/Nav';
import { ThreadLayer } from '@/components/Thread';
import { Hero } from '@/components/Hero';
import { Statement } from '@/components/Statement';
import { About } from '@/components/About';
import { Education } from '@/components/Education';
import { Experience, Projects, Skills, Recognition, Interests } from '@/components/Sections';
import { Contact } from '@/components/Contact';
import { Closing } from '@/components/Closing';

export default function Page() {
  return (
    <>
      <JsFlag />
      <Intro />
      <Nav />
      <main id="main" className="main">
        <ThreadLayer />
        <Hero />
        <Statement />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Recognition />
        <Interests />
        <Contact />
        <Closing />
      </main>
    </>
  );
}
