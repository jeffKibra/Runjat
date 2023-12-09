import Head from "next/head";
import PropTypes from "prop-types";

import ScrollButton from "./ScrollButton";
import Footer from "./Footer";

function PageLayout(props) {
  const { pageTitle, pageDescription, children } = props;
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta
          property="og:url"
          content="https://ignatiusfactorhrconsulting.com"
        />
        <meta property="og:site_name" content="ignatius factor HR consulting" />
        <meta name="twitter:title" content={pageTitle} />

        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:site" content="@ignatius_factor" />
        <meta name="twitter:creator" content="@ignatius_factor" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json"></link>

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ScrollButton />
      <main>{children}</main>

      <Footer />
    </>
  );
}

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
  pageTitle: PropTypes.string.isRequired,
  pageDescription: PropTypes.string,
};

export default PageLayout;
