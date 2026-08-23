import { Instrument_Serif, DM_Sans } from "next/font/google";
import "@/index.css";
import SiteNav from "@/components/site-nav";
import SiteFooter from "@/components/site-footer";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-instrument",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm",
  display: "swap",
});

export const metadata = {
  title: "Syed Suhaan",
  description:
    "Applied AI engineer — agent systems, voice, RAG, and evals. MIT Manipal · Lexapar · SecondCortex Labs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${instrumentSerif.variable} ${dmSans.variable}`}>
      <body className={`${dmSans.className} min-h-screen bg-background text-foreground antialiased`}>
        <SiteNav />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
