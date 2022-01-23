import type { NextPage } from "next";
import client from "@/graphql/client";
import GetAllLayout from "@/components/layouts/GetAllLayout";
import GET_ALL_SPECIES from "@/graphql/get_all_species.graphql";

const AllSpecies: NextPage = ({ data, totalCount }: any) => {
  return <GetAllLayout data={data} totalCount={totalCount} title="Species" />;
};

export async function getStaticProps() {
  const { data } = await client.query({ query: GET_ALL_SPECIES });
  return {
    props: {
      data: data.allSpecies.species,
      totalCount: data.allSpecies.totalCount,
    },
  };
}

export default AllSpecies;
