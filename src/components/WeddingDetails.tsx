import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import PetalIcon from "./PetalIcon";

const MAPS_URL = "https://maps.app.goo.gl/qqZu89CNhNkm3Piq8?g_st=ic";

function Divider() {
  return (
    <div className="my-6 flex items-center justify-center gap-3 text-gold/70">
      <span className="h-px w-16 bg-gradient-to-r from-transparent to-gold/60" />
      <PetalIcon className="h-4 w-4 text-petal-rose" />
      <span className="h-px w-16 bg-gradient-to-l from-transparent to-gold/60" />
    </div>
  );
}

function CalendarIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3.5" y="5" width="17" height="16" rx="2.5" />
      <path d="M3.5 9.5h17" strokeLinecap="round" />
      <path d="M8 3v4M16 3v4" strokeLinecap="round" />
    </svg>
  );
}

function PinIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" />
    </svg>
  );
}

export default function WeddingDetails() {
  const { t } = useTranslation();

  return (
    <section
      id="details"
      className="felt-bg relative flex items-center justify-center px-4 py-20 sm:py-28"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="relative w-full max-w-2xl rounded-3xl border-2 border-gold/60 bg-cream text-ink shadow-card"
      >
        <div className="px-6 py-12 text-center sm:px-14">
          <h2 className="font-display text-3xl font-extrabold text-ink sm:text-4xl">
            {t("details.title")}
          </h2>
          <p className="mx-auto mt-3 max-w-md font-body text-sm text-ink/70 sm:text-base">
            {t("details.subtitle")}
          </p>

          <Divider />

          {/* Two events */}
          <div className="grid gap-8 sm:grid-cols-2">
            {/* Event 1: Henna */}
            <div className="flex flex-col items-center">
              <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full border-2 border-gold/60 text-cardred">
                <CalendarIcon className="h-6 w-6" />
              </div>
              <h3 className="font-body text-xs font-bold uppercase tracking-[0.2em] text-gold-dark">
                {t("details.when")}
              </h3>
              <p className="mt-2 font-arabic text-xl font-bold text-ink" dir="rtl">
                {t("details.event1.title")}
              </p>
              <p className="mt-1 font-display text-base font-semibold text-ink">
                {t("details.event1.date")}
              </p>
              <p className="mt-1 font-body text-sm text-ink/70">
                {t("details.event1.location")}
              </p>
            </div>

            {/* Event 2: Wedding */}
            <div className="flex flex-col items-center">
              <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full border-2 border-gold/60 text-ink">
                <PinIcon className="h-6 w-6" />
              </div>
              <h3 className="font-body text-xs font-bold uppercase tracking-[0.2em] text-gold-dark">
                {t("details.where")}
              </h3>
              <p className="mt-2 font-arabic text-xl font-bold text-ink" dir="rtl">
                {t("details.event2.title")}
              </p>
              <p className="mt-1 font-display text-base font-semibold text-ink">
                {t("details.event2.date")}
              </p>
              <p className="mt-1 font-body text-sm text-ink/70">
                {t("details.event2.location")}
              </p>
              <p className="mt-0.5 font-body text-sm text-ink/70">
                {t("details.event2.time")}
              </p>
            </div>
          </div>

          <Divider />

          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-cardred px-6 py-3 font-body text-sm font-semibold text-cream shadow-card transition hover:bg-cardred-dark hover:shadow-cardhover"
          >
            <PinIcon className="h-4 w-4" />
            {t("details.mapButton")}
          </a>
        </div>
      </motion.div>
    </section>
  );
}
