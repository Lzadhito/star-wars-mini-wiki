import type { NextPage } from "next";
import client from "@/graphql/client";
import GetAllLayout from "@/components/GetAllLayout";
import GET_ALL_STARSHIPS from "@/graphql/get_all_starships.graphql";

const AllCharacters: NextPage = ({ data, totalCount }: any) => {
  return <GetAllLayout data={data} totalCount={totalCount} />;
};

export async function getStaticProps() {
  const { data } = await client.query({ query: GET_ALL_STARSHIPS });
  return {
    props: {
      data: data.allStarships.starships,
      totalCount: data.allStarships.totalCount,
    },
  };
}

export default AllCharacters;
