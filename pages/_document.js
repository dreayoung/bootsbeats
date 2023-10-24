import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/soundwave.png" />
        <meta
          name="description"
          content="This is a demo project! createdbydwe.tech"
        />

        {/* <!-- Google / Search Engine Tags --> */}
        <meta itemProp="name" content="Boots Beats" />
        <meta
          itemProp="description"
          content="This is a demo project! createdbydwe.tech"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
