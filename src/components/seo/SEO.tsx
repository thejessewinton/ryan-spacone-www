import { env } from "env/client.mjs";

interface HeadProps {
  title?: string;
  description?: string;
}

export const SEO = ({ title, description }: HeadProps) => {
  return (
    <>
      <title>{`${title as string} — Ryan Spacone`}</title>
      <meta property="twitter:title" content={title} />
      <meta property="og:title" content={title} />
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, height=device-height, initial-scale=1, shrink-to-fit=no, viewport-fit=cover"
      />
      <link rel="canonical" href={env.NEXT_PUBLIC_URL} />
      <meta property="og:url" content={env.NEXT_PUBLIC_URL} />
      <meta property="og:site_name" content="Ryan Spacone" />
      <meta property="og:type" content="website" />
      <meta
        property="og:image"
        content="https://linear.app/static/og/home.jpg"
      />
      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:image"
        content="https://linear.app/static/og/home.jpg"
      />
      <meta name="description" content={description} />
      <meta property="twitter:description" content={description} />
      <meta property="og:description" content={description} />
    </>
  );
};
