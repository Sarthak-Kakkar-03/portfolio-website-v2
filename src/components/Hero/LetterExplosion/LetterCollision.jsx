// LetterCollision.jsx
'use client';
import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LetterDisplay from './LetterDisplay';

gsap.registerPlugin(ScrollTrigger);

// If your header is exactly 60px tall:
const HEADER_H = 64;

const lines = [
  'Shaping',
  'vision',
  'into',
  'lasting',
  'solutions'
];

export default function LetterCollision() {
  const ref = useRef(null);
  const inited = useRef(false);

  useLayoutEffect(() => {
    if (inited.current) return; // guard StrictMode double-run in dev
    inited.current = true;

    const container = ref.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      const letters = container.querySelectorAll('.letter');

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
            ease: 'none',
            immediateRender: false,
            scrollTrigger: {
              trigger: container,
              start: `top top+=${HEADER_H}`, // account for fixed header overlap
              end: 'bottom top',             // when the bottom of section hits top of viewport
              scrub: true,                   // smooth follow
              invalidateOnRefresh: false     // keep cached randomness
            }
          }
        );
      });
    }, container);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach(t => t.kill());
      gsap.killTweensOf('.letter');
      inited.current = false;
    };
  }, []);

  return (
    <>
      {/* Section fills the screen minus header */}
      <section
        ref={ref}
        className="ml-8 flex flex-col justify-center items-start pb-8"
        style={{ minHeight: `calc(100vh - ${HEADER_H}px)`, paddingTop: 24, paddingBottom: 24 }}
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
      </section>
      
    </>
  );
}
