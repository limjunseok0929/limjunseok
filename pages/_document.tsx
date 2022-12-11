import Document, { Head, Html, Main, NextScript, DocumentContext } from 'next/document'
import React from 'react'

React.useLayoutEffect = React.useEffect

class DocumentClass extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }
  render() {
    return (
      <Html className='scroll-smooth snap-mandatory snap-y'>
        <Head />
        <Main />
        <NextScript />
      </Html>
    )
  }
}

export default DocumentClass