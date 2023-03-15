import React from "react";
import Document, {
  DocumentInitialProps,
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render(): JSX.Element {
    return (
      <Html lang="pt-BR">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="use-credentials"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Blinker:wght@300;400;600&family=Neuton:wght@300;400;700&display=swap"
            rel="stylesheet"
          />
          <link
            rel="shortcut icon"
            href="./logo.svg"
            type="image/svg+xml"
            sizes="53x60"
          />

          {/* <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-H4CLQQ7WDT"
          /> */}
          {/* <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-H4CLQQ7WDT');
              `,
            }}
          /> */}
          {/* <script
            dangerouslySetInnerHTML={{
              __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-K4ZXVBR')
              `,
            }}
          /> */}

          {/* <meta
            name="google-site-verification"
            content="GDaXA8TkY_ElfE_chzngyOgX_qDdCLv_DjZnKCMNXu0"
          /> */}

          {/* tag de SEO */}
          {/* <base href="https://www.studiodon.com.br" />
          <link rel="canonical" href="https://www.studiodon.com.br" /> */}
          {/* <meta name="robots" content="index, follow" />
          <meta
            name="keywords"
            content="don, donstudio, DonStudio,Development web, desenvolvedor web, react, nextjs, marketing, designer, site, digital, seo, google ads, google, marca, redes sociais, facebook, instagram, youtube, linkedin, monitoramento, performance, ji-parana"
          />
          <meta
            name="description"
            content="Don Studio, somos uma equipe de desenvolvedores, que tem um objetivo em comum, trazer a solução através da tecnologia com o intuito de agregar valor ao seu produto."
          />

          <meta
            itemProp="name"
            content="Don Studio | Crie sua página web com a gente. "
          />
          <meta itemProp="image" content="/imgCapa/imgcapa.svg" />
          <meta
            itemProp="description"
            content="Don Studio, somos uma equipe de desenvolvedores, que tem um objetivo em comum, trazer a solução através da tecnologia com o intuito de agregar valor ao seu produto."
          />

          <meta
            property="og:title"
            content="Don Studio | Crie sua página web com a gente."
          />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="imgCapa/imgcapa.svg" />
          <meta property="og:image:secure_url" content="imgCapa/imgcapa.svg" />
          <meta
            property="og:description"
            content="Don Studio, somos uma equipe de desenvolvedores, que tem um objetivo em comum, trazer a solução através da tecnologia com o intuito de agregar valor ao seu produto."
          /> */}
        </Head>
        <body>
          {/* <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-K4ZXVBR"
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript> */}
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
