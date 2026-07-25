import { useMemo } from "react";
import SparkleIcon from "./SparkleIcon";

const colors = ["text-gold", "text-gold-light", "text-gold-dark"];

/**
 * A lightweight, purely CSS-driven layer of golden sparkles drifting and
 * twinkling down the screen. Fixed to the viewport so it drifts over every
 * section, but stays sparse, small, semi-transparent and click-through so it
 * never gets in the way of reading the page or interacting with it.
 */
export default function FallingSparkles({ count = 20 }: { count?: number }) {
  const sparkles = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        color: colors[i % colors.length],
        left: Math.random() * 100,
        size: 8 + Math.random() * 12,
        fallDelay: Math.random() * 9,
        fallDuration: 8 + Math.random() * 7,
        swayDelay: Math.random() * 4,
        swayDuration: 3 + Math.random() * 3,
      })),
    [count]
  );

  return (
    <div className="petals-layer" aria-hidden="true">
      {sparkles.map((s, i) => (
        <span
          key={i}
          className="animate-petalSway absolute top-0"
          style={{
            left: `${s.left}%`,
            animationDelay: `${s.swayDelay}s`,
            animationDuration: `${s.swayDuration}s`,
          }}
        >
          <span
            className={`animate-sparkleFall block ${s.color}`}
            style={{
              width: `${s.size}px`,
              height: `${s.size}px`,
              animationDelay: `${s.fallDelay}s`,
              animationDuration: `${s.fallDuration}s`,
            }}
          >
            <SparkleIcon className="h-full w-full drop-shadow-sm" />
          </span>
        </span>
      ))}
    </div>
  );
}
