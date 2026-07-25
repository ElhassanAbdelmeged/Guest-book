type Props = {
  className?: string;
};

/**
 * A small stylized flower blossom made of four overlapping petals with a
 * lighter center. Used by FallingPetals for the ambient falling-flowers
 * animation. Renders in `currentColor`, so petal color is set via a text-*
 * class on the wrapper.
 */
export default function PetalIcon({ className = "" }: Props) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <g fill="currentColor">
        <circle cx="12" cy="7.2" r="5" />
        <circle cx="12" cy="16.8" r="5" />
        <circle cx="7.2" cy="12" r="5" />
        <circle cx="16.8" cy="12" r="5" />
      </g>
      <circle cx="12" cy="12" r="2.6" fill="#fff8f0" />
    </svg>
  );
}
