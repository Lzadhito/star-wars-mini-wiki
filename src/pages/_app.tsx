import { ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";
import client from "@/graphql/client";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;