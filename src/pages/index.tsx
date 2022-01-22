import type { NextPage } from "next";
import GET_ALL_FILMS from "@/graphql/get_all_films.graphql";
import client from "@/graphql/client";
import GetAllCard from "@/components/GetAllCard";

const Home: NextPage = ({ data }) => {
  return (
    <div>
      {data.map((e) => (
        <GetAllCard key={e.id} data={e} />
      ))}
    </div>
  );
};

export async function getStaticProps() {
  const { data } = await client.query({ query: GET_ALL_FILMS });
  return { props: { data: data.allFilms.films } };
}

export default Home;
