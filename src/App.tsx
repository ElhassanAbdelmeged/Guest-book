import { useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WeddingDetails from "./components/WeddingDetails";
import GuestBook from "./components/GuestBook";
import PhotoUpload from "./components/PhotoUpload";
import Footer from "./components/Footer";
import BackgroundMusic, {
  type BackgroundMusicHandle,
} from "./components/BackgroundMusic";
import EntryOverlay from "./components/EntryOverlay";
import FallingSparkles from "./components/FallingSparkles";

export default function App() {
  const musicRef = useRef<BackgroundMusicHandle>(null);

  return (
    <div className="min-h-screen bg-felt">
      <FallingSparkles count={20} />
      <EntryOverlay onEnter={() => musicRef.current?.play()} />
      <BackgroundMusic ref={musicRef} />
      <Navbar />
      <main>
        <Hero />
        <WeddingDetails />
        <GuestBook />
        <PhotoUpload />
      </main>
      <Footer />
    </div>
  );
}
