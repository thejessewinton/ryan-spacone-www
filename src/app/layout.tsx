import type { PropsWithChildren } from "react";
import { Dosis, Inter, Lora } from "@next/font/google";

import "../styles/globals.css";
import { Header } from "components/header/Header";
import { Footer } from "components/footer/Footer";
import { AnalyticsWrapper } from "components/analytics-wrapper/analytics-wrapper";
import { getSiteSettings } from "utils/prismic";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "optional",
});
const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  display: "optional",
  weight: ["400", "700"],
});
const dosis = Dosis({
  variable: "--font-cutive",
  subsets: ["latin"],
  display: "optional",
  weight: ["400"],
});

const RootLayout = async ({ children }: PropsWithChildren) => {
  const { data } = await getSiteSettings();

  return (
    <html
      lang="en"
      className={`${inter.variable} ${lora.variable} ${dosis.variable} bg-neutral-900`}
    >
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link href="/favicon.ico" rel="shortcut icon" />
      <body className="flex min-h-screen flex-col bg-neutral-900 text-neutral-200">
        <Header navigation={data.slices} />
        <main className="relative">{children}</main>
        <Footer socials={data.socials} />
        <AnalyticsWrapper />
      </body>
    </html>
  );
};

export default RootLayout;
