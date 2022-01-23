import type { NextPage } from "next";
import client from "@/graphql/client";
import GET_ALL_STARSHIPS from "@/graphql/get_all_starships.graphql";
import GET_STARSHIP from "@/graphql/get_starship.graphql";
import DetailLayout from "@/components/layouts/DetailLayout";

const StarshipDetail: NextPage = ({ data }: any) => {
  return <DetailLayout data={data} titleKey="name" />;
};

export async function getStaticPaths() {
  const { data } = await client.query({ query: GET_ALL_STARSHIPS });
  const starships = data.allStarships.starships;
  const paths = starships.map((starship) => ({
    params: {
      id: starship.id,
    },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params: { id } }) {
  const { data } = await client.query({
    query: GET_STARSHIP,
    variables: { id },
  });
  return { props: { data: data.starship } };
}

export default StarshipDetail;
