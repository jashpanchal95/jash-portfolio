'use client';
import { useRef, useState, type KeyboardEvent, type PointerEvent } from 'react';
import { Reveal } from './Reveal';
import { Wp } from './Thread';
import { SITE } from '@/lib/content';

const MAIL = `mailto:${SITE.email}?subject=${encodeURIComponent('Hello Jash')}&body=${encodeURIComponent('Hi Jash,\n\n')}`;
/** Resting length of the cord, how far the handle may travel, and how far it must be pulled (px). */
const BASE = 72;
const MAX = 190;
const NEED = 70;

/**
 * The finale: one confident line, then the string comes to rest on a hook.
 * A cord hangs from the hook. Pull it and the email board flips into view.
 * The board flips to show the address and opens the visitor's own email app.
 */
export function Closing() {
  const zone = useRef<HTMLDivElement>(null);
  const startY = useRef<number | null>(null);
  const moved = useRef(false);
  const [open, setOpen] = useState(false);

  const setLen = (px: number) => zone.current?.style.setProperty('--len', `${px}px`);
  const reveal = () => {
    setLen(BASE);
    setOpen(true);
  };
  const endDrag = () => {
    startY.current = null;
    zone.current?.classList.remove('drag');
  };

  const onDown = (e: PointerEvent<HTMLButtonElement>) => {
    startY.current = e.clientY;
    moved.current = false;
    zone.current?.classList.add('drag');
    e.currentTarget.setPointerCapture(e.pointerId);
  };
  const onMove = (e: PointerEvent<HTMLButtonElement>) => {
    if (startY.current === null) return;
    const pull = Math.max(0, e.clientY - startY.current) * 0.8;
    if (pull > 4) moved.current = true;
    setLen(BASE + Math.min(pull, MAX - BASE));
  };
  const onUp = (e: PointerEvent<HTMLButtonElement>) => {
    if (startY.current === null) return;
    const pull = Math.max(0, e.clientY - startY.current) * 0.8;
    endDrag();
    if (!moved.current || pull >= NEED) reveal();
    else setLen(BASE);
  };
  const onCancel = () => {
    endDrag();
    setLen(BASE);
  };
  const onKey = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowDown') {
      e.preventDefault();
      reveal();
    }
  };

  return (
    <section className="cl dk" id="end" data-nav="contact" aria-label="Closing">
      <div className="wrap">
        <Wp className="top" left="26%" top="-3.8rem" loop={16} />
        <Wp left="72%" top="5%" loop={24} />
        <Wp left="24%" top="22%" />
        <Reveal className="mask">
          <p className="cl-l"><span className="rm"><span className="rt">Bring me the problem.</span></span></p>
        </Reveal>
        <Reveal className="mask" delay={160}>
          <p className="cl-l"><span className="rm"><span className="rt">I’ll find the way.</span></span></p>
        </Reveal>
        <div className="hookbox">
          <div className="hook">
            <Wp left="30%" top="-55%" />
            <Wp left="30%" top="9%" />
            <svg viewBox="0 0 120 132" aria-hidden="true">
              <circle cx="36" cy="12" r="8" />
              <path d="M36 20V90C36 124 84 124 84 90" />
              <circle cx="60" cy="124" r="8" />
            </svg>
          </div>
          <div ref={zone} className={`pullzone${open ? ' open' : ''}`}>
            <div className="cord">
              <i />
              <button
                type="button"
                className="pull"
                aria-label="Pull the string to reveal how to write to me"
                onPointerDown={onDown}
                onPointerMove={onMove}
                onPointerUp={onUp}
                onPointerCancel={onCancel}
                onKeyDown={onKey}
              >
                <svg viewBox="0 0 12 12" aria-hidden="true"><path d="M6 1v9M2 6l4 4 4-4" /></svg>
              </button>
              <span className="hint tag">Pull the string</span>
            </div>
            <div className="tagwrap" aria-hidden={!open}>
              <div className="swing">
                <a className="tagcard" href={MAIL} tabIndex={open ? 0 : -1} aria-label={`Write to me at ${SITE.email}`}>
                  <span className="face front">{SITE.email}</span>
                  <span className="face back" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <footer className="cf">
          <span>Jash Panchal</span>
          <span>A mind in progress.</span>
          <a href="#home">Back to top</a>
        </footer>
      </div>
    </section>
  );
}
