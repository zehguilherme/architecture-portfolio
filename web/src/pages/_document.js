import { Head, Html, Main, NextScript } from 'next/document'

export default function Document () {
  return (
    <Html lang="pt-BR">
      <Head>
        <meta charSet="UTF-8" />
        <link rel="icon" href="/favicon.ico" />

        <meta name="theme-color" content="#B6939A" />

        <meta property="og:locale" content="pt_BR" />

        {/* Title */}
        <meta name="title" content="Studio Amanda Borges" />

        {/* Description */}
        <meta name="description" content="Meu nome é Amanda Borges! Sou formada em Arquitetura e Urbanismo pela Universidade Paulista na cidade de Bauru/SP e já trabalhei com projetos de
interiores, comerciais, residenciais e de móveis e expositores."/>
        <meta
          property="og:description" content="Meu nome é Amanda Borges! Sou formada em Arquitetura e Urbanismo pela Universidade Paulista na cidade de Bauru/SP e já trabalhei com projetos de
          interiores, comerciais, residenciais e de móveis e expositores."/>
        <meta
          property="twitter:description" content="Meu nome é Amanda Borges! Sou formada em Arquitetura e Urbanismo pela Universidade Paulista na cidade de Bauru/SP e já trabalhei com projetos de
          interiores, comerciais, residenciais e de móveis e expositores."/>

        {/* URL */}
        <meta
          property="og:url"
          content="https://studioamandaborges.vercel.app"
        />
        <meta
          property="twitter:url"
          content="https://studioamandaborges.vercel.app"
        />

        {/* Image */}
        <meta property="twitter:image" content="https://www.datocms-assets.com/85603/1678211901-studio_amanda_borges.png" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="og:image" itemProp="image" content="https://www.datocms-assets.com/85603/1678211901-studio_amanda_borges.png" />
        <meta property="og:image:width" content="526" />
        <meta property="og:image:height" content="275" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:type" content="website" />

        {/* Favicon */}
        <link rel="apple-touch-icon" sizes="180x180" href="./public/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="./public/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="./public/favicon-16x16.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
