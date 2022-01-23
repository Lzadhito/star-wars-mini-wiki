import type { NextPage } from "next";
import client from "@/graphql/client";
import GetAllLayout from "@/components/GetAllLayout";
import GET_ALL_CHARACTERS from "@/graphql/get_all_characters.graphql";

const AllCharacters: NextPage = ({ data, totalCount }: any) => {
  return <GetAllLayout data={data} totalCount={totalCount} />;
};

export async function getStaticProps() {
  const { data } = await client.query({ query: GET_ALL_CHARACTERS });
  return {
    props: {
      data: data.allPeople.people,
      totalCount: data.allPeople.totalCount,
    },
  };
}

export default AllCharacters;
