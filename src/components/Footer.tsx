import { useTranslation } from "react-i18next";
import PetalIcon from "./PetalIcon";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="relative bg-ink px-4 py-12 text-center">
      {/* Decorative top border */}
      <div className="mx-auto mb-8 flex max-w-xs items-center justify-center gap-3 text-gold/60">
        <span className="h-px flex-1 bg-gradient-to-r from-transparent to-gold/50" />
        <PetalIcon className="h-4 w-4 text-petal-rose" />
        <span className="h-px flex-1 bg-gradient-to-l from-transparent to-gold/50" />
      </div>

      <p className="py-1 font-script text-4xl leading-relaxed text-gold-shimmer sm:text-5xl">
        {t("footer.names")}
      </p>
      <p className="mt-2 font-display text-lg tracking-[0.3em] text-cream/80">
        {t("footer.date")}
      </p>

      <p className="mt-6 inline-flex items-center gap-1.5 font-body text-xs text-cream/50">
        {t("footer.madeWith")}
        <PetalIcon className="h-3.5 w-3.5 text-petal-rose" />
      </p>
    </footer>
  );
}
