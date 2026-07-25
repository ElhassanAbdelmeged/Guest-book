import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";

const SONG_URL = `${import.meta.env.BASE_URL}wedding-song.mp3`;

export type BackgroundMusicHandle = {
  /** Start playback. Must be called from within a user gesture on mobile. */
  play: () => void;
};

/**
 * Plays the wedding song softly on a loop in the background.
 * - Never starts on its own — it only starts when `play()` is called (the
 *   entry overlay calls it the moment the visitor taps "Tap to Enter"). This
 *   is deliberate: the splash screen plays its own short intro clip first,
 *   and this song should only take over once the visitor has entered the
 *   site, not compete with the intro or autoplay before that.
 * - Low volume so it stays a subtle backdrop.
 * - Pauses automatically when the tab is hidden and resumes when it's visible.
 * - The floating button reflects the real playing state, so a single tap always
 *   toggles correctly.
 */
const BackgroundMusic = forwardRef<BackgroundMusicHandle>((_props, ref) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const wasPlayingRef = useRef(false);

  useImperativeHandle(ref, () => ({
    play: () => {
      const audio = audioRef.current;
      if (!audio) return;
      wasPlayingRef.current = true;
      audio.play().catch(() => {});
    },
  }));

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.18;

    const onPlay = () => {
      setIsPlaying(true);
      wasPlayingRef.current = true;
    };
    const onPause = () => setIsPlaying(false);
    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);

    const onVisibility = () => {
      if (document.hidden) {
        audio.pause();
      } else if (wasPlayingRef.current) {
        audio.play().catch(() => {});
      }
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      wasPlayingRef.current = true;
      audio.play().catch(() => {});
    } else {
      wasPlayingRef.current = false;
      audio.pause();
    }
  };

  return (
    <>
      <audio ref={audioRef} src={SONG_URL} loop preload="auto" />
      <button
        onClick={toggle}
        aria-label={isPlaying ? "Mute music" : "Play music"}
        title={isPlaying ? "Mute music" : "Play music"}
        className="fixed bottom-4 right-4 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-gold/60 bg-ink/80 text-gold shadow-card backdrop-blur-md transition hover:bg-gold hover:text-ink"
      >
        {isPlaying ? (
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
            <path d="M4 9v6h4l5 5V4L8 9H4z" />
            <path
              d="M16 8.5a4 4 0 0 1 0 7"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
            <path
              d="M18.5 6a7 7 0 0 1 0 12"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
            <path d="M4 9v6h4l5 5V4L8 9H4z" />
            <path
              d="M16 9l5 6M21 9l-5 6"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        )}
      </button>
    </>
  );
});

BackgroundMusic.displayName = "BackgroundMusic";

export default BackgroundMusic;
