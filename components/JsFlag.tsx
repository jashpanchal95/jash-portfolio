'use client';
import { useEffect } from 'react';

/** Adds the `js` class once hydration succeeds, so content is never hidden if scripts fail. */
export function JsFlag() {
  useEffect(() => {
    document.documentElement.classList.add('js');
  }, []);
  return null;
}
