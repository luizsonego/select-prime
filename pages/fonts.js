import { Tangerine, Roboto } from "next/font/google";

const tangerine = Tangerine({
  weight: ["400", "700"],
  subsets: ["latin"],
  adjustFontFallback: false,
});

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
  adjustFontFallback: false,
});

export { tangerine, roboto };
