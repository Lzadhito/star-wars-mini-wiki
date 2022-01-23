import { useEffect, useState } from "react";
import Router from "next/router";
import type { AppProps } from "next/app";

import { ApolloProvider } from "@apollo/client";

import client from "@/graphql/client";
import Navigation from "@/components/Navigation";
import "@/lib/css/global.css";
import PageLoader from "@/components/PageLoader";
import Head from "next/head";
import Footer from "@/components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const start = () => {
      setLoading(true);
    };
    const end = () => {
      setLoading(false);
    };

    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);

  return (
    <ApolloProvider client={client}>
      <Head>
        <title>Star Wars Mini Wiki</title>
      </Head>
      <Navigation />
      <main>
        {loading ? (
          <PageLoader />
        ) : (
          <>
            <Component {...pageProps} />
            <Footer />
          </>
        )}
      </main>
    </ApolloProvider>
  );
}

export default MyApp;
