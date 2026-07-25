import { useMemo } from "react";
import PetalIcon from "./PetalIcon";

const colors = [
  "text-petal-pink",
  "text-petal-rose",
  "text-petal-peach",
  "text-petal-lavender",
  "text-petal-mint",
];

/**
 * A lightweight, purely CSS-driven layer of colorful falling flower petals.
 * Fixed to the viewport so it drifts over every section, but stays sparse,
 * small, semi-transparent and click-through so it never gets in the way of
 * reading the page or interacting with it.
 */
export default function FallingPetals({ count = 20 }: { count?: number }) {
  const petals = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        color: colors[i % colors.length],
        left: Math.random() * 100,
        size: 10 + Math.random() * 14,
        fallDelay: Math.random() * 10,
        fallDuration: 9 + Math.random() * 8,
        swayDelay: Math.random() * 4,
        swayDuration: 3 + Math.random() * 3,
      })),
    [count]
  );

  return (
    <div className="petals-layer" aria-hidden="true">
      {petals.map((p, i) => (
        <span
          key={i}
          className="animate-petalSway absolute top-0"
          style={{
            left: `${p.left}%`,
            animationDelay: `${p.swayDelay}s`,
            animationDuration: `${p.swayDuration}s`,
          }}
        >
          <span
            className={`animate-petalFall block ${p.color}`}
            style={{
              width: `${p.size}px`,
              height: `${p.size}px`,
              animationDelay: `${p.fallDelay}s`,
              animationDuration: `${p.fallDuration}s`,
            }}
          >
            <PetalIcon className="h-full w-full drop-shadow-sm" />
          </span>
        </span>
      ))}
    </div>
  );
}
