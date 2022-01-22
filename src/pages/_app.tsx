import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  const client = new ApolloClient({
    uri: "https://swapi-graphql.netlify.app/.netlify/functions/index",
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
