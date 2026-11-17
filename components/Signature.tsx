'use client';
import { useEffect, useRef } from 'react';
import { SIG_D, SIG_VIEW } from '@/lib/signature';
import { css } from '@/lib/util';

interface SignatureProps {
  /** Start drawing immediately (intro). Otherwise it draws when scrolled into view. */
  auto?: boolean;
  delay?: number;
  className?: string;
}

/** The signature, drawn stroke by stroke. */
export function Signature({ auto = false, delay = 0, className = '' }: SignatureProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    const path = pathRef.current;
    if (!svg || !path) return;
    path.style.setProperty('--len', String(Math.ceil(path.getTotalLength())));
    if (auto || typeof IntersectionObserver === 'undefined') {
      svg.classList.add('go');
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          svg.classList.add('go');
          io.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    io.observe(svg);
    return () => io.disconnect();
  }, [auto]);

  return (
    <svg
      ref={svgRef}
      className={`sig ${className}`}
      viewBox={SIG_VIEW}
      role="img"
      aria-label="Signature of Jash Panchal"
      style={css({ '--dl': `${delay}s` })}
    >
      <path ref={pathRef} d={SIG_D} />
    </svg>
  );
}
