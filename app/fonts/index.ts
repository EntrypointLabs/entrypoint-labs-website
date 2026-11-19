import localFont from "next/font/local";

/* Self-hosted from the Fontsource packages (SIL Open Font License 1.1).
   next/font/google can no longer parse the font URLs Google Fonts serves,
   which fails the build, so both families ship with the site instead. */

export const inter = localFont({
  src: "./inter-latin-variable.woff2",
  weight: "100 900",
  style: "normal",
  display: "swap",
  variable: "--font-inter",
});

export const pixelify = localFont({
  src: "./pixelify-sans-latin-600.woff2",
  weight: "600",
  style: "normal",
  display: "swap",
  variable: "--font-pixel",
});
