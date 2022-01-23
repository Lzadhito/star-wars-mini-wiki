import type { NextPage } from "next";
import client from "@/graphql/client";
import GetAllLayout from "@/components/layouts/GetAllLayout";
import GET_ALL_PLANETS from "@/graphql/get_all_planets.graphql";

const AllPlanets: NextPage = ({ data, totalCount }: any) => {
  return <GetAllLayout data={data} totalCount={totalCount} title="Planets" />;
};

export async function getStaticProps() {
  const { data } = await client.query({ query: GET_ALL_PLANETS });
  return {
    props: {
      data: data.allPlanets.planets,
      totalCount: data.allPlanets.totalCount,
    },
  };
}

export default AllPlanets;
