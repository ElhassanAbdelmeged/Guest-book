import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import SparkleIcon from "./SparkleIcon";

const MAPS_URL = "https://maps.app.goo.gl/qqZu89CNhNkm3Piq8?g_st=ic";

function Divider() {
  return (
    <div className="my-6 flex items-center justify-center gap-3 text-gold/70">
      <span className="h-px w-16 bg-gradient-to-r from-transparent to-gold/60" />
      <SparkleIcon className="h-4 w-4 text-gold" />
      <span className="h-px w-16 bg-gradient-to-l from-transparent to-gold/60" />
    </div>
  );
}

/** A henna cone with a few dye drops — represents the small henna-night gathering. */
function HennaIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.7">
      <path d="M12 3c3 3.2 5 6.8 5 9.6a5 5 0 0 1-10 0C7 9.8 9 6.2 12 3z" />
      <circle cx="12" cy="16.5" r="0.7" fill="currentColor" stroke="none" />
      <circle cx="9.7" cy="18.3" r="0.55" fill="currentColor" stroke="none" />
      <circle cx="14.3" cy="18.3" r="0.55" fill="currentColor" stroke="none" />
    </svg>
  );
}

/** Two interlocking rings — represents the main wedding ceremony. */
function RingsIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.7">
      <circle cx="9" cy="14" r="5.2" />
      <circle cx="15" cy="14" r="5.2" />
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
            {/* Event 1: Henna — small gathering for the groom's friends */}
            <div className="flex flex-col items-center">
              <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full border-2 border-gold/60 text-cardred">
                <HennaIcon className="h-6 w-6" />
              </div>
              <h3 className="font-body text-xs font-bold uppercase tracking-[0.2em] text-gold-dark">
                {t("details.event1.label")}
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
              <p className="mt-2 max-w-[16rem] font-body text-xs text-ink/50">
                {t("details.event1.note")}
              </p>
            </div>

            {/* Event 2: Wedding — the main celebration */}
            <div className="flex flex-col items-center">
              <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full border-2 border-gold/60 text-ink">
                <RingsIcon className="h-6 w-6" />
              </div>
              <h3 className="font-body text-xs font-bold uppercase tracking-[0.2em] text-gold-dark">
                {t("details.event2.label")}
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
              <p className="mt-2 max-w-[16rem] font-body text-xs text-ink/50">
                {t("details.event2.note")}
              </p>
            </div>
          </div>

          <Divider />

          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border-2 border-gold bg-ink px-6 py-3 font-body text-sm font-semibold text-cream shadow-card transition hover:shadow-gold hover:border-gold-light"
          >
            <PinIcon className="h-4 w-4 text-gold" />
            {t("details.mapButton")}
          </a>
        </div>
      </motion.div>
    </section>
  );
}
