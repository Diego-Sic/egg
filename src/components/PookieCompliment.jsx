import { useState } from "react";
import { motion } from "framer-motion";
import eggImage from "../media/eggImage.png";
import chickenImage from "../media/chickenImage.png";

const compliments = [
  "You're the cutest pookie ever! 💖",
  "Pookie, you're a ray of sunshine! ☀️",
  "You're sweeter than a whole jar of honey! 🍯",
  "Pookie, you make my heart go doki-doki! 💓",
  "You're the sparkle in the universe! ✨",
  "Pookie, you're my favorite person ever! 🥰",
  "You're the softest cloud in the sky! ☁️",
  "Pookie, you're a bundle of joy! 🎀",
];

export default function PookieCompliment() {
  const [compliment, setCompliment] = useState(compliments[0]);
  const [isHatched, setIsHatched] = useState(false);

  const getNewCompliment = () => {
    const randomIndex = Math.floor(Math.random() * compliments.length);
    setCompliment(compliments[randomIndex]);
    setIsHatched(!isHatched);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundColor: "#fce4ec",
        padding: "16px",
        textAlign: "center",
      }}
    >
      <motion.img
        src={isHatched ? chickenImage : eggImage}
        alt="Pookie"
        style={{
          width: "160px",
          height: "160px",
          marginBottom: "16px",
          borderRadius: "50%",
          boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
        }}
        animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      />
      <motion.p
        style={{
          fontSize: "20px",
          color: "#d81b60",
          fontWeight: "bold",
          marginBottom: "16px",
        }}
        key={compliment}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {compliment}
      </motion.p>
      <button
        onClick={getNewCompliment}
        style={{
          backgroundColor: "#e91e63",
          color: "white",
          padding: "8px 16px",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
          transition: "background-color 0.2s",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#c2185b")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#e91e63")}
      >
        Give me a new compliment!
      </button>
    </div>
  );
}
