/* Creating WordAnimation.jsx in a separate component because the interval re-renders the component everytime. This caused a issue with three-js : it re-rendered the 3D components everytime */
import { useEffect, useState, useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LangContext } from "../../LangContext";

export const WordAnimation = () => {
  const { isEnglish } = useContext(LangContext);
  const [word, setWord] = useState("3D");

  const textArrayFR = ["Optimisation", "Environnements immersifs", "Web", "Animation", "Texturing", "Photogrammétrie", "3D"];
  const textArrayEN = ["Optimisation", "Immersive Environnements", "Web", "Animation", "Texturing", "Photogrammetry", "3D"];

  useEffect(() => {
    let i = 1;
    const interval = setInterval(() => {
      const arr = isEnglish ? textArrayEN : textArrayFR;
      setWord(arr[i % arr.length]);
      i++;
    }, 1800);

    return () => clearInterval(interval);
  }, [isEnglish]);

  return (
    <AnimatePresence mode="wait">
      <motion.h1
        key={word}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.5 }}
        style={{ fontSize: "3.7em", letterSpacing: "3px" }}
      >
        {word}
      </motion.h1>
    </AnimatePresence>
  );
};

