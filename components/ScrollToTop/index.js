"use client";

import { useEffect } from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

export default function ScrollToTop() {
  useEffect(() => {
    const scrollToTopButton = document.getElementById("scrollToTop");

    const handleScroll = () => {
      const scrollToTopButton = document.getElementById("scrollToTop");
      if (window.scrollY > 300) {
        scrollToTopButton.style.display = "block";
      } else {
        scrollToTopButton.style.display = "none";
      }
    };

    window.addEventListener("scroll", handleScroll);

    const handleClick = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    scrollToTopButton?.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      scrollToTopButton?.removeEventListener("click", handleClick);
    };
  }, []);
  return (
    <button id="scrollToTop">
      <ArrowUpwardIcon />
    </button>
  );
}
