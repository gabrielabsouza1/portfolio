import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    
    return (
        <Html lang='en'>
            <Head>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossOrigin="anonymous"></link>
                <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet"></link>
                <meta name="theme-color" content="#0a0a0c" />
            </Head>
            <body>
                <Main />
                <NextScript />
                <noscript>
                    <style dangerouslySetInnerHTML={{ __html: "[data-reveal],[data-reveal] *{opacity:1!important;transform:none!important;}" }} />
                </noscript>
            </body>
        </Html>
    )
}
