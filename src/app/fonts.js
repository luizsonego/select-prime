import {
  Great_Vibes,
  Poppins,
  Roboto,
  Roboto_Mono,
  Tangerine,
} from "next/font/google";

export const greatvibes = Great_Vibes({
  weight: ["400"],
  subsets: ["latin"],
  adjustFontFallback: false,
});

export const tangerine = Tangerine({
  weight: ["400", "700"],
  subsets: ["latin"],
  adjustFontFallback: false,
});

export const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  adjustFontFallback: false,
});

export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  adjustFontFallback: false,
});

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  adjustFontFallback: false,
});
