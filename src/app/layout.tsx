import type { PropsWithChildren } from "react";
import { Inter, Newsreader } from "@next/font/google";

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
const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  display: "optional",
});

const RootLayout = async ({ children }: PropsWithChildren) => {
  const { data } = await getSiteSettings();

  return (
    <html
      lang="en"
      className={`${inter.variable} ${newsreader.variable} bg-neutral-900`}
    >
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link href="/favicon.ico" rel="shortcut icon" />
      <body className="flex min-h-screen flex-col bg-white text-neutral-800">
        <Header navigation={data.slices} />
        <main className="relative px-9">{children}</main>
        <Footer socials={data.socials} />
        <AnalyticsWrapper />
      </body>
    </html>
  );
};

export default RootLayout;
