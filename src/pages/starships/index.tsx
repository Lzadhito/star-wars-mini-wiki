import type { NextPage } from "next";
import client from "@/graphql/client";
import GetAllLayout from "@/components/layouts/GetAllLayout";
import GET_ALL_STARSHIPS from "@/graphql/get_all_starships.graphql";

const AllStarships: NextPage = ({ data, totalCount }: any) => {
  return <GetAllLayout data={data} totalCount={totalCount} title="Starships" />;
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

export default AllStarships;
