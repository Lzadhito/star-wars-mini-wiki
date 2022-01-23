import type { NextPage } from "next";
import client from "@/graphql/client";
import GetAllLayout from "@/components/GetAllLayout";
import GET_ALL_SPECIES from "@/graphql/get_all_species.graphql";

const AllCharacters: NextPage = ({ data, totalCount }: any) => {
  return <GetAllLayout data={data} totalCount={totalCount} />;
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

export default AllCharacters;
