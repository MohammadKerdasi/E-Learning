import { useEffect, useState } from "react";

interface IntroProps {
  onComplete: () => void;
}

const Intro: React.FC<IntroProps> = ({ onComplete }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        onComplete();
      }, 1000);
    }, 3000); 

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-white z-50 transition-opacity duration-1000 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="text-center animate-bounce">
        <svg
          width="100"
          height="100"
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mb-4"
        >
          <rect width="44" height="44" rx="8" fill="#FF9500" />
          <path
            d="M9.09903 35.5802L17.9262 26.7531H26.7533V17.9259L35.5805 26.7531L26.7533 35.5802H9.09903Z"
            fill="white"
          />
          <path
            d="M9.09903 17.9259L17.9262 26.7531V17.9259H26.7533L35.5805 9.09875H17.9262L9.09903 17.9259Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
};

export default Intro;
