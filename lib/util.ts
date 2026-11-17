import type { CSSProperties } from 'react';

/** Typed helper for inline CSS custom properties, e.g. style={css({ '--d': '.2s' })} */
export const css = (vars: Record<string, string | number>): CSSProperties => vars as CSSProperties;
