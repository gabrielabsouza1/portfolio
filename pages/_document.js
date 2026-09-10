import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#0a0a0c" />
      </Head>
      <body>
        <Main />
        <NextScript />
        <noscript>
          <style
            dangerouslySetInnerHTML={{
              __html: "[data-reveal],[data-reveal] *{opacity:1!important;transform:none!important;}",
            }}
          />
        </noscript>
      </body>
    </Html>
  );
}
