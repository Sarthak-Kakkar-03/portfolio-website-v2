// LetterCollision.jsx
"use client";
import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LetterDisplay from "./LetterDisplay";

gsap.registerPlugin(ScrollTrigger);

// If your header is exactly 60px tall:
const HEADER_H = 64;

const lines = ["Shaping", "vision", "into", "lasting", "solutions"];

export default function LetterCollision() {
  const ref = useRef(null);
  const inited = useRef(false);

  useLayoutEffect(() => {
    if (inited.current) return; // guard StrictMode double-run in dev
    inited.current = true;

    const container = ref.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      const letters = container.querySelectorAll(".letter");

      // compute how far we need to move letters so they leave the screen
      const containerHeight = container.offsetHeight; // ≈ (100vh - 60px)
      const travel = containerHeight + 120; // overshoot by a bit so fully out of view

      letters.forEach((letter, i) => {
        // lock in per-letter randomness once (keeps refresh stable)
        if (!letter.dataset.speed) {
          letter.dataset.speed = (0.8 + Math.random() * 0.7).toString();
        }
        if (!letter.dataset.rot) {
          // deterministic-ish rotation based on index so it doesn't jump
          letter.dataset.rot = String(((i * 13) % 60) - 30);
        }

        const speed = parseFloat(letter.dataset.speed);
        const rot = parseFloat(letter.dataset.rot);

        gsap.fromTo(
          letter,
          { y: 0, rotation: 0 },
          {
            // move UP so they scroll off the top
            y: -(1 - speed) * travel,
            rotation: rot,
            ease: "none",
            immediateRender: false,
            scrollTrigger: {
              trigger: container,
              start: `top top+=${HEADER_H}`, // account for fixed header overlap
              end: "bottom top", // when the bottom of section hits top of viewport
              scrub: true, // smooth follow
              invalidateOnRefresh: false, // keep cached randomness
            },
          }
        );
      });
    }, container);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
      gsap.killTweensOf(".letter");
      inited.current = false;
    };
  }, []);

  return (
    <>
      {/* Section fills the screen minus header */}
      <section
        ref={ref}
        className="ml-8 flex flex-col justify-center items-start pb-8"
        style={{
          minHeight: `calc(100vh - ${HEADER_H}px)`,
          paddingTop: 24,
          paddingBottom: 24,
        }}
      >
        <div className="mb-8">
          <div className="flex flex-wrap">
            <LetterDisplay word={lines[0]} />
            <div className="w-4 sm:w-10" />
            <LetterDisplay word={lines[1]} />
          </div>
          <div className="flex flex-wrap mt-2">
            <LetterDisplay word={lines[2]} />
            <div className="w-4 sm:w-10" />
            <LetterDisplay word={lines[3]} />
          </div>
        </div>
        <div className="flex flex-wrap">
          <LetterDisplay word={lines[4]} />
        </div>
        <div className="hidden md:flex w-full justify-end
        animate-bounce
        ">
          <svg
            width="22px"
            height="22px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 3C12.5523 3 13 3.44772 13 4V17.5858L18.2929 12.2929C18.6834 11.9024 19.3166 11.9024 19.7071 12.2929C20.0976 12.6834 20.0976 13.3166 19.7071 13.7071L12.7071 20.7071C12.3166 21.0976 11.6834 21.0976 11.2929 20.7071L4.29289 13.7071C3.90237 13.3166 3.90237 12.6834 4.29289 12.2929C4.68342 11.9024 5.31658 11.9024 5.70711 12.2929L11 17.5858V4C11 3.44772 11.4477 3 12 3Z"
              fill="#000000"
            />
          </svg>
        </div>
      </section>
    </>
  );
}
