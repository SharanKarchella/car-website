import { useEffect, useState } from "react";
import Background from "./Components/Background/Background";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";

function App() {
  let heroData = [
    { text1: "Dive into", text2: "what you love" },
    { text1: "Indulge", text2: "your passions" },
    { text1: "Give in to", text2: "your passions" },
  ];

  const [heroCount, setHeroCount] = useState(0);
  const [playVideo, setPlayVideo] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroCount((count) => (count === 2 ? 0 : count + 1));
    }, 3000);

    // Cleanup function to clear interval on unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Background playVideo={playVideo} heroCount={heroCount} />
      <Navbar />
      <Hero
        setPlayVideo={setPlayVideo}
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playVideo={playVideo}
      />
    </div>
  );
}

export default App;
