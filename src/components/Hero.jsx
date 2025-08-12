import { useEffect, useState } from "react";

const Hero = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFadeIn(true);
    }, 300);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      <video
        autoPlay
        loop
        muted
        playsInline
        className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-2000 ease-out ${
          fadeIn ? "opacity-100" : "opacity-0"
        }`}
      >
        <source src="https://assets-cug1-825v2.tajhotels.com/video/TAJ%20WEBSITE%20FILM_1920%20X%20930_148mb.mp4?Impolicy=Medium_High" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

    
      <div
        className={`relative z-10 flex flex-col items-center justify-center h-full text-center text-white transition-opacity duration-1500 ease-out delay-300 ${
          fadeIn ? "opacity-100" : "opacity-0"
        }`}
      >
        <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">Experience Luxury</h1>
        <p className="text-lg mb-8 drop-shadow-md">
          Unwind in our exclusive rooms and suites
        </p>
        <button className="bg-green-300 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-red-400 hover:scale-105 transition-transform duration-300">
          Book Now
        </button>
      </div>
    </div>
  )
}

export default Hero;
