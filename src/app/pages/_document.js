import Document, { Html, Head, Main, NextScript } from 'next/document'

function createMarkup() {
  return {__html: "document.addEventListener('DOMContentLoaded', () => { const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);"};
};

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
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.8.2/css/bulma.min.css" />

          <script defer src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/js/all.min.js"></script>

        </Head>
        <body class="has-navbar-fixed-top">

          <Main />

          <NextScript />

        </body>
        <script src="/nav_burger_activate.js"/>


      </Html>
    )
  }
}

export default MyDocument
