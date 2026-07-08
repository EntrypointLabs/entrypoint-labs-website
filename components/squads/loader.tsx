"use client";

import { useEffect, useState } from "react";
import { Logomark } from "./brand";

const HOLD_MS = 1600;
const FADE_MS = 400;

export function Loader() {
  const [visible, setVisible] = useState(true);
  const [fadingOut, setFadingOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFadingOut(true), HOLD_MS);
    const unmountTimer = setTimeout(() => setVisible(false), HOLD_MS + FADE_MS);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(unmountTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center ${fadingOut ? "pointer-events-none" : ""}`}
      style={{
        backgroundColor: "#FCFCFE",
        opacity: fadingOut ? 0 : 1,
        transition: `opacity ${FADE_MS}ms ease-out`,
      }}
      aria-hidden
    >
      <Logomark size={50} className="sq-loader-mark text-[#1E1E1E]" />
      <style>{`
        .sq-loader-mark {
          animation: sq-loader-spin 1.8s infinite;
        }
        @keyframes sq-loader-spin {
          0% { transform: rotate(0deg); animation-timing-function: ease-in-out; }
          20% { transform: rotate(90deg); animation-timing-function: linear; }
          25% { transform: rotate(90deg); animation-timing-function: ease-in-out; }
          45% { transform: rotate(180deg); animation-timing-function: linear; }
          50% { transform: rotate(180deg); animation-timing-function: ease-in-out; }
          70% { transform: rotate(270deg); animation-timing-function: linear; }
          75% { transform: rotate(270deg); animation-timing-function: ease-in-out; }
          95% { transform: rotate(360deg); }
          100% { transform: rotate(360deg); }
        }
        @media (prefers-reduced-motion: reduce) {
          .sq-loader-mark {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}
