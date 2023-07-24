import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import Head from "next/head";
import { Suspense } from "react";
import Contactwhatsapp from "./Components/Contactwhatsapp";
import Footer from "./Components/Footer";

import Navbar from "./Components/Navbar";
import "./globals.css";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

export const metadata = {
  title: "Select Prime Financial Solutions",
  description: "A Select Prime Solution Financial é especialista em soluções financeiras inteligentes para sua vida pessoal e empresarial. Oferecemos consultoria financeira personalizada, gestão de investimentos, planejamento da aposentadoria e assessoria para empresas. Entre em contato para uma consulta gratuita.",
  keywords: "Select Prime Solution Financial, soluções financeiras, consultoria financeira, gestão de investimentos, planejamento da aposentadoria, assessoria para empresas",
  author: "Select Prime Solution Financial",
  language: "Portuguese",
  robots: "index, follow"
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt" className="scroll-smooth">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Roboto:ital,wght@0,100;0,300;0,400;0,700;1,300;1,400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="scroll-smooth">
        <Navbar style={{ zIndex: "9999" }} />
        <Suspense fallback={<p>Loading...</p>}>
          <main>{children}</main>
        </Suspense>
        <a
          href="https://api.whatsapp.com/send?phone=5544999536451&text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20a%20Select%20Prime"
          target="_blank"
        >
          <Contactwhatsapp />
        </a>
        <Footer />
      </body>
    </html>
  );
}
