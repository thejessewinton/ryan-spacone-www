import type { PropsWithChildren } from "react";
import { Manrope, Unbounded } from "@next/font/google";

import "../styles/globals.css";
import { Header } from "components/header/Header";
import { Footer } from "components/footer/Footer";
import { AnalyticsWrapper } from "components/analytics-wrapper/analytics-wrapper";
import { getSiteSettings } from "utils/prismic";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "optional",
});
const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
  display: "optional",
});

const RootLayout = async ({ children }: PropsWithChildren) => {
  const { data } = await getSiteSettings();

  return (
    <html
      lang="en"
      className={`${manrope.variable} ${unbounded.variable} leading-loose tracking-wide`}
    >
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link href="/favicon.ico" rel="shortcut icon" />
      <body className="flex min-h-screen flex-col bg-primary text-neutral-200">
        <Header navigation={data.slices} />
        <main className="relative">{children}</main>
        <Footer socials={data.socials} />
        <AnalyticsWrapper />
      </body>
    </html>
  );
};

export default RootLayout;
