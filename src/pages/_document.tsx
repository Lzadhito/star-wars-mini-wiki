import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="title" content="Star Wars Mini Wiki" />
          <meta
            name="description"
            content="Minimalist wiki about star wars powered by your favorite SWAPI GQL"
          />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://metatags.io/" />
          <meta property="og:title" content="Star Wars Mini Wiki" />
          <meta
            property="og:description"
            content="Minimalist wiki about star wars powered by your favorite SWAPI GQL"
          />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:title" content="Star Wars Mini Wiki" />
          <meta
            property="twitter:description"
            content="Minimalist wiki about star wars powered by your favorite SWAPI GQL"
          />

          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content="#fff" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Mukta:wght@400;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
