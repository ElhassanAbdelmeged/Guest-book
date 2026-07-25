import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import CountdownTimer from "./CountdownTimer";
import PetalIcon from "./PetalIcon";

const assetsBase = `${import.meta.env.BASE_URL}assets/images/`;
// A single shared childhood photo of both Mohamed and Nashwa together.
const coupleBabyPhoto = `${assetsBase}mohamed-nashwa-baby.png`;

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="felt-bg relative flex min-h-screen flex-col items-center justify-center overflow-x-hidden px-4 pb-16 pt-28"
    >
      {/* Intro line */}
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        className="relative z-10 mb-6 text-center font-body text-sm uppercase tracking-[0.3em] text-gold-dark sm:text-base"
      >
        {t("hero.invited")}
      </motion.p>

      {/* One shared photo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: -20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 70, damping: 14, delay: 0.3 }}
        className="relative z-10"
      >
        <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-petal-pink/30 via-gold/20 to-petal-lavender/30 blur-md" />
        <div className="relative h-40 w-40 overflow-hidden rounded-full border-4 border-gold/60 shadow-card sm:h-60 sm:w-60 md:h-64 md:w-64">
          <img
            src={coupleBabyPhoto}
            alt={`${t("hero.groom")} & ${t("hero.bride")}`}
            className="h-full w-full object-cover"
          />
        </div>
        <span className="absolute -bottom-2 -right-2 flex h-9 w-9 items-center justify-center rounded-full bg-cream text-cardred shadow-card sm:h-11 sm:w-11">
          <PetalIcon className="h-6 w-6 sm:h-7 sm:w-7" />
        </span>
      </motion.div>

      {/* Names as a big title */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.8 }}
        className="relative z-10 mt-8 px-4 py-2 text-center font-script text-4xl leading-relaxed text-gold-shimmer sm:mt-10 sm:text-6xl md:text-7xl"
      >
        {t("hero.groom")} <span className="text-gold-dark">{t("hero.and")}</span>{" "}
        {t("hero.bride")}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="relative z-10 mt-3 text-center font-display text-lg text-ink/80 sm:text-2xl"
      >
        {t("hero.date")}
      </motion.p>

      {/* Countdown */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="relative z-10 mt-10"
      >
        <CountdownTimer />
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="relative z-10 mt-12 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest text-ink/50">
          {t("hero.scrollHint")}
        </span>
        <span className="animate-bounce text-gold-dark">
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </motion.div>
    </section>
  );
}
