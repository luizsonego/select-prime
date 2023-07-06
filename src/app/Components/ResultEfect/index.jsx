"use client";

import React, { useEffect } from "react";

const ResultEfect = ({ finalNumber, prefix, sufix }) => {
  useEffect(() => {
    const elements = document.querySelectorAll("[data-number-animate]");

    elements.forEach((element) => {
      const number = Number(element.dataset.number);
      const duration = 3000;
      const easing = (t) => t * t; // Easing: easeInQuad

      let start = null;
      const animate = (timestamp) => {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const value = Math.floor(
          easing(Math.min(progress / duration, 1)) * number
        );

        element.innerHTML = String(value);

        if (progress < duration) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    });

    setTimeout(() => {
      elements.forEach((element) => {
        const animationEndEvents = [
          "webkitAnimationEnd",
          "mozAnimationEnd",
          "MSAnimationEnd",
          "oanimationend",
          "animationend",
        ];
        const animationName = "pulse";

        element.classList.add("animated", animationName);

        const animationEndListener = () => {
          element.classList.remove("animated", animationName);
          element.removeEventListener("animationend", animationEndListener);
        };

        animationEndEvents.forEach((event) => {
          element.addEventListener(event, animationEndListener);
        });
      });
    }, 3000);
  }, []);

  return (
    <p>
      {prefix}
      <span data-number-animate data-number={finalNumber}></span>
      {sufix}
    </p>
  );
};

export default ResultEfect;
