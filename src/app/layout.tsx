import type { PropsWithChildren } from "react";
import { Lora, Open_Sans } from "next/font/google";

import "../styles/globals.css";
import { Header } from "components/header/Header";
import { Footer } from "components/footer/Footer";
import { AnalyticsWrapper } from "components/analytics-wrapper/analytics-wrapper";
import { getSiteSettings } from "utils/prismic";
import type { Metadata } from "next";
import { env } from "env/client.mjs";

const openSans = Open_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "optional",
});

const lora = Lora({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "optional",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Ryan Spacone - Director of Photography",
    template: "%s — Ryan Spacone",
  },
  openGraph: {
    images: [`${env.NEXT_PUBLIC_URL}/og.jpg`],
  },
};

const RootLayout = async ({ children }: PropsWithChildren) => {
  const { data } = await getSiteSettings();

  return (
    <html
      lang="en"
      className={`${openSans.variable} ${lora.variable} h-full leading-loose tracking-wide`}
    >
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link href="/favicon.ico" rel="shortcut icon" />
      <body className="flex min-h-screen flex-col bg-white text-neutral-900">
        <Header navigation={data.slices} />
        <main className="relative">{children}</main>
        <Footer socials={data.socials} />
        <AnalyticsWrapper />
      </body>
    </html>
  );
};

export default RootLayout;
