import type { NextPage } from "next";
import client from "@/graphql/client";
import GetAllLayout from "@/components/GetAllLayout";
import GET_ALL_FILMS from "@/graphql/get_all_films.graphql";

const AllFilms: NextPage = ({ data }: any) => {
  return <GetAllLayout data={data} />;
};

export async function getStaticProps() {
  const { data } = await client.query({ query: GET_ALL_FILMS });
  return { props: { data: data.allFilms.films } };
}

export default AllFilms;
