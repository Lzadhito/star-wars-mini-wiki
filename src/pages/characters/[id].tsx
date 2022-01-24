import type { NextPage } from "next";
import client from "@/graphql/client";
import GET_ALL_CHARACTERS from "@/graphql/get_all_characters.graphql";
import GET_CHARACTER from "@/graphql/get_character.graphql";
import DetailLayout from "@/components/layouts/DetailLayout";

const CharacterDetail: NextPage = ({ data }: any) => {
  return <DetailLayout data={data} titleKey="name" />;
};

export async function getStaticPaths() {
  const { data } = await client.query({ query: GET_ALL_CHARACTERS });
  const characters = data.allPeople.people;
  const paths = characters.map((person) => ({
    params: {
      id: person.id,
    },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params: { id } }) {
  const { data } = await client.query({
    query: GET_CHARACTER,
    variables: { id },
  });
  return { props: { data: data.person } };
}

export default CharacterDetail;
