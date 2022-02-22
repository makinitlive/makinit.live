import Head from 'next/head'

const Seo = ({ title, description }) => (
  <Head>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <title>{title}</title>
    <meta name="description"                content={description} />
    <meta name="description"                content={description} />
    <meta name="twitter:card"               content="summary_large_image" />
    <meta name="twitter:creator"            content="@brett_jay" />
    <meta name="twitter:title"              content="Brett Jones" />
    
    <meta property="og:url"                 content="https://makinit.live" />
    <meta property="og:type"                content="article" />
    <meta property="og:title"               content="Brett Jones" />
    <meta property="og:description"         content={description} />
    
    <meta name="twitter:image"              content="https://makinit.live/opengraph.png" />
    <meta property="og:image"               content="https://makinit.live/opengraph.png" />

    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="manifest" href="/site.webmanifest" />
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#b326e1" />
    <meta name="msapplication-TileColor" content="#da532c" />
    <meta name="theme-color" content="#ffffff" />

  </Head>
)

export default Seo
