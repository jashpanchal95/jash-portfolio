import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter-tight/800.css';
import '@fontsource/inter-tight/900.css';
import '@fontsource/playfair-display/500.css';
import '@fontsource/playfair-display/500-italic.css';
import '@fontsource/cormorant-garamond/500.css';
import '@fontsource/cormorant-garamond/500-italic.css';
import '@fontsource/jetbrains-mono/400.css';
import './globals.css';

const title = 'Jash Panchal | A Mind in Progress';
const description =
  'Jash Panchal is a Computer Science Engineering student specialising in AI and ML. Curious by nature, multidisciplinary by interest, technological by direction.';

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, type: 'website' },
  twitter: { card: 'summary', title, description },
};

export const viewport: Viewport = {
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-IN">
      <body>
        {children}
        <noscript>
          <style>{'.intro{display:none!important}.rise,.rv{opacity:1!important;transform:none!important;animation:none!important}.rt{transform:none!important}'}</style>
        </noscript>
      </body>
    </html>
  );
}
