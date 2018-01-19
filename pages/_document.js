import Document, { Head, Main, NextScript } from 'next/document'

export default class extends Document {
  render() {
    return (
      <html>
        <Head>
          <title>Trip List</title>
          <meta name="viewport" content="width=device-width,user-scalable=no,initial-scale=1,maximum-scale=1,minimum-scale=1" />
          <link rel='stylesheet' type='text/css' href='//unpkg.com/antd-mobile@2.0.0-beta.2/dist/antd-mobile.min.css' />
        </Head>
        <body>
          <Main />
          <footer>
            <NextScript />
          </footer>
        </body>
        <style jsx global>
          {`
            body, html {
              height: 100%;
            }
            body {
              padding: 16px;
              margin: 0;
              padding: 0;
              background-color: #000
            }
            body>div, #__next, #__next>div, #__next>div>div {
              height: 100%;
            }
            * {
              box-sizing: border-box;
            }
          `}
        </style>
      </html>
    )
  }
}
