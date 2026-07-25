type Props = {
  className?: string;
};

/**
 * A small four-point sparkle (✨), used as the site's recurring golden
 * accent — on the falling ambient animation and as small decorative icons.
 * Renders in `currentColor`.
 */
export default function SparkleIcon({ className = "" }: Props) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12 1.5c.6 4.2 1.7 6.9 3.4 8.6 1.7 1.7 4.4 2.8 8.6 3.4-4.2.6-6.9 1.7-8.6 3.4-1.7 1.7-2.8 4.4-3.4 8.6-.6-4.2-1.7-6.9-3.4-8.6C6.9 15.1 4.2 14 0 13.5c4.2-.6 6.9-1.7 8.6-3.4 1.7-1.7 2.8-4.4 3.4-8.6z" />
      <path d="M19 1c.25 1.4.7 2.3 1.4 3 .7.7 1.6 1.15 3 1.4-1.4.25-2.3.7-3 1.4-.7.7-1.15 1.6-1.4 3-.25-1.4-.7-2.3-1.4-3-.7-.7-1.6-1.15-3-1.4 1.4-.25 2.3-.7 3-1.4.7-.7 1.15-1.6 1.4-3z" />
    </svg>
  );
}
