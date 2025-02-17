import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html lang="en-GB" {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>Upgrading Ethereum</title>
        <meta property="og:image" content="https://benjaminion.xyz/f/android-icon-192x192.png" />
        <meta property="og:title" content="Upgrading Ethereum" />
        <meta property="og:description" content="A technical handbook on Ethereum's move to proof of stake and beyond." />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="eth2book.info" />
        <meta name="twitter:creator" content="@benjaminion_xyz" />
        <meta name="twitter:image" content="https://benjaminion.xyz/f/android-icon-192x192.png" />
        <meta name="description" content="A technical handbook on Ethereum's move to proof of stake and beyond." />
        <link rel="apple-touch-icon" sizes="57x57" href="https://benjaminion.xyz/f/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="https://benjaminion.xyz/f/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="https://benjaminion.xyz/f/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="https://benjaminion.xyz/f/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="https://benjaminion.xyz/f/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="https://benjaminion.xyz/f/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="https://benjaminion.xyz/f/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="https://benjaminion.xyz/f/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="https://benjaminion.xyz/f/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="https://benjaminion.xyz/f/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="https://benjaminion.xyz/f/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="https://benjaminion.xyz/f/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="https://benjaminion.xyz/f/favicon-16x16.png" />
        <link rel="manifest" href="https://benjaminion.xyz/f/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="https://benjaminion.xyz/f/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="stylesheet" type="text/css" href="https://benjaminion.xyz/fonts/fonts.css" />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
