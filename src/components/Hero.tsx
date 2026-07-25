import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import PlayingCard from "./PlayingCard";
import CountdownTimer from "./CountdownTimer";
import SuitIcon from "./SuitIcon";

const assetsBase = `${import.meta.env.BASE_URL}assets/images/`;
// A single shared childhood photo of both Mohamed and Nashwa together, used
// for both cards (cropped to each side so every card frames its own child).
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

      {/* The two cards */}
      <div className="relative z-10 flex items-center justify-center gap-1 sm:gap-8">
        <motion.div
          initial={{ y: "-120vh", rotate: -35, opacity: 0 }}
          animate={{ y: 0, rotate: -4, opacity: 1 }}
          transition={{ type: "spring", stiffness: 60, damping: 12, delay: 0.4 }}
          whileHover={{ rotate: 0, y: -12, scale: 1.03 }}
          className="w-28 sm:w-52 md:w-60"
        >
          <PlayingCard
            rank="K"
            suit="heart"
            name={t("hero.groom")}
            role={t("hero.king")}
            center={
              <img
                src={coupleBabyPhoto}
                alt={t("hero.groom")}
                className="h-full w-full rounded-full object-cover object-left"
              />
            }
          />
        </motion.div>

        {/* Ampersand / heart between */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 0.6, type: "spring" }}
          className="relative z-20 -mx-2 flex flex-col items-center sm:-mx-6"
        >
          <div className="animate-float text-cardred drop-shadow-[0_4px_12px_rgba(0,0,0,0.4)]">
            <SuitIcon suit="heart" className="h-7 w-7 sm:h-16 sm:w-16" />
          </div>
          <span className="mt-1 font-script text-2xl leading-relaxed text-gold-dark sm:text-5xl">
            {t("hero.and")}
          </span>
        </motion.div>

        <motion.div
          initial={{ y: "-120vh", rotate: 35, opacity: 0 }}
          animate={{ y: 0, rotate: 4, opacity: 1 }}
          transition={{ type: "spring", stiffness: 60, damping: 12, delay: 0.6 }}
          whileHover={{ rotate: 0, y: -12, scale: 1.03 }}
          className="w-28 sm:w-52 md:w-60"
        >
          <PlayingCard
            rank="Q"
            suit="heart"
            name={t("hero.bride")}
            role={t("hero.queen")}
            center={
              <img
                src={coupleBabyPhoto}
                alt={t("hero.bride")}
                className="h-full w-full rounded-full object-cover object-right"
              />
            }
          />
        </motion.div>
      </div>

      {/* Names as a big title */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="relative z-10 mt-8 px-4 py-2 text-center font-script text-4xl leading-relaxed text-gold-shimmer sm:mt-10 sm:text-6xl md:text-7xl"
      >
        {t("hero.groom")} <span className="text-gold-dark">&amp;</span>{" "}
        {t("hero.bride")}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="relative z-10 mt-3 text-center font-display text-lg text-ink/80 sm:text-2xl"
      >
        {t("hero.date")}
      </motion.p>

      {/* Countdown */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.7, duration: 0.8 }}
        className="relative z-10 mt-10"
      >
        <CountdownTimer />
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
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
