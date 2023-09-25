import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <link
          href="/favicon-16x16.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link
          href="/favicon-32x32.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
        <link rel="apple-touch-icon" href="/apple-icon-180x180.png"></link>
        {/* <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        ></meta> */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0 user-scalable=no"
        />
        <meta name="theme-color" content="#1a1b1d" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
