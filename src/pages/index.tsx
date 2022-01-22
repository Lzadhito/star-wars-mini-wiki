import type { NextPage } from "next";
import { css } from "@emotion/react";
import { useQuery } from "@apollo/client";
import GET_ALL_FILMS from "@/graphql/get_all_films.graphql";

const Home: NextPage = () => {
  const { data } = useQuery(GET_ALL_FILMS);

  console.log(data);

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

export default Home;
