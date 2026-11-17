interface HeadProps {
  label: string;
  title: string;
  variant: 'serif' | 'garam' | 'disp';
}

/** Section heading: a short orange line, a small label, then the title. */
export function Head({ label, title, variant }: HeadProps) {
  return (
    <header className="sh">
      <span className="lbl">
        <i />
        {label}
      </span>
      <h2 className={`h-${variant}`}>{title}</h2>
    </header>
  );
}
