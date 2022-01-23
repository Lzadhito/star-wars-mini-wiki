import type { NextPage } from "next";
import client from "@/graphql/client";
import GET_ALL_FILMS from "@/graphql/get_all_films.graphql";
import GET_FILM from "@/graphql/get_film.graphql";
import DetailLayout from "@/components/layouts/DetailLayout";

const FilmDetail: NextPage = ({ data }: any) => {
  return <DetailLayout data={data} titleKey="title" />;
};

export async function getStaticPaths() {
  const { data } = await client.query({ query: GET_ALL_FILMS });
  const films = data.allFilms.films;
  const paths = films.map((film) => ({
    params: {
      id: film.id,
    },
  }));
  return { paths, fallback: "blocking" };
}

export async function getStaticProps({ params: { id } }) {
  const { data } = await client.query({ query: GET_FILM, variables: { id } });
  return { props: { data: data.film } };
}

export default FilmDetail;
