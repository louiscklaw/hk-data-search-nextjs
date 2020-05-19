import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Hello Bulma!</title>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.8.2/css/bulma.min.css" />
          <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
        </Head>
        <body class="has-navbar-fixed-top">

          <Main />

          <NextScript />

        </body>
      </Html>
    )
  }
}

export default MyDocument
