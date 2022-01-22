import type { NextPage } from "next";
import { css } from "@emotion/react";
import GET_ALL_FILMS from "@/graphql/get_all_films.graphql";
import client from "@/graphql/client";

const Home: NextPage = ({ films }) => {
  console.log(films);

  return (
    <div
      css={css`
        background-color: blue;
      `}
    >
      soldier 76
    </div>
  );
};

export async function getStaticProps() {
  const { data } = await client.query({ query: GET_ALL_FILMS });
  return {
    props: {
      films: data,
    },
  };
}

export default Home;
