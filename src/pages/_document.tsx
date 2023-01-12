import { Html, Head, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-white font-sans font-light text-neutral-800 dark:bg-neutral-900 dark:text-neutral-200">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
