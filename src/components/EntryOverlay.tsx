import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import SparkleIcon from "./SparkleIcon";

const coupleBabyPhoto = `${import.meta.env.BASE_URL}assets/images/mohamed-nashwa-baby.png`;
// Optional short intro clip that plays softly on the splash screen, before
// the visitor taps "Tap to Enter" (which then starts the main wedding song).
// Drop a file named `intro-song.mp3` into the `public` folder to enable it —
// until then this 404s silently and the splash is just silent, no error shown.
const INTRO_SONG_URL = `${import.meta.env.BASE_URL}intro-song.mp3`;

/**
 * Full-screen entry splash. Tapping anywhere starts the background music
 * (the tap satisfies mobile autoplay rules) and reveals the site.
 */
export default function EntryOverlay({ onEnter }: { onEnter: () => void }) {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(true);
  const introAudioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    document.body.style.overflow = visible ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [visible]);

  useEffect(() => {
    const audio = introAudioRef.current;
    if (!audio) return;
    audio.volume = 0.35;
    // Browsers always allow autoplay when muted — start muted immediately,
    // then unmute on the visitor's first touch/pointer movement so it plays
    // with sound as soon as possible without violating autoplay rules.
    audio.muted = true;
    audio.play().catch(() => {});

    const unmute = () => {
      audio.muted = false;
    };
    window.addEventListener("pointermove", unmute, { once: true });
    window.addEventListener("touchstart", unmute, { once: true });

    return () => {
      window.removeEventListener("pointermove", unmute);
      window.removeEventListener("touchstart", unmute);
    };
  }, []);

  const handleEnter = () => {
    const introAudio = introAudioRef.current;
    if (introAudio) {
      introAudio.pause();
    }
    onEnter();
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="entry"
          onClick={handleEnter}
          exit={{ opacity: 0, scale: 1.08 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          role="button"
          tabIndex={0}
          aria-label={t("entry.enter")}
          className="felt-bg fixed inset-0 z-[100] flex cursor-pointer flex-col items-center justify-center overflow-hidden px-6 text-center"
        >
          <audio ref={introAudioRef} src={INTRO_SONG_URL} loop preload="auto" />
          {/* Couple photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 70, damping: 14, delay: 0.15 }}
            className="relative mb-8"
          >
            <div className="absolute -inset-2 rounded-[1.5rem] bg-gradient-to-br from-gold/25 via-gold-light/20 to-gold/25 blur-md" />
            <div className="relative aspect-[1086/1448] w-32 overflow-hidden rounded-2xl border-4 border-gold/60 bg-cream shadow-card sm:w-40">
              <img
                src={coupleBabyPhoto}
                alt={t("footer.names")}
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="font-body text-xs uppercase tracking-[0.3em] text-gold-dark sm:text-sm"
          >
            {t("entry.kicker")}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
            className="mt-3 py-2 font-script text-5xl leading-relaxed text-gold-shimmer sm:text-7xl"
          >
            {t("footer.names")}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-1 font-display text-base text-ink/80 sm:text-xl"
          >
            {t("hero.date")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="mt-10 flex flex-col items-center gap-3"
          >
            <span className="inline-flex animate-pulseGold items-center gap-2 rounded-full bg-cardred px-8 py-3.5 font-body text-sm font-bold uppercase tracking-widest text-cream shadow-card">
              <SparkleIcon className="h-4 w-4" />
              {t("entry.enter")}
            </span>
            <span className="inline-flex items-center gap-1.5 font-body text-[11px] text-ink/50">
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor" aria-hidden="true">
                <path d="M4 9v6h4l5 5V4L8 9H4z" />
                <path
                  d="M16 9a4 4 0 0 1 0 6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
              {t("entry.withSound")}
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
