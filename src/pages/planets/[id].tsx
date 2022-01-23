import type { NextPage } from "next";
import client from "@/graphql/client";
import GET_ALL_PLANETS from "@/graphql/get_all_planets.graphql";
import GET_PLANET from "@/graphql/get_planet.graphql";
import DetailLayout from "@/components/layouts/DetailLayout";

const PlanetDetail: NextPage = ({ data }: any) => {
  return <DetailLayout data={data} titleKey="name" />;
};

export async function getStaticPaths() {
  const { data } = await client.query({ query: GET_ALL_PLANETS });
  const planets = data.allPlanets.planets;
  const paths = planets.map((planet) => ({
    params: {
      id: planet.id,
    },
  }));
  return { paths, fallback: "blocking" };
}

export async function getStaticProps({ params: { id } }) {
  const { data } = await client.query({
    query: GET_PLANET,
    variables: { id },
  });
  return { props: { data: data.planet } };
}

export default PlanetDetail;
