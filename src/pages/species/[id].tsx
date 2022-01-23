import type { NextPage } from "next";
import client from "@/graphql/client";
import GET_ALL_SPECIES from "@/graphql/get_all_species.graphql";
import GET_SPECIES from "@/graphql/get_species.graphql";
import DetailLayout from "@/components/layouts/DetailLayout";

const SpeciesDetail: NextPage = ({ data }: any) => {
  return <DetailLayout data={data} titleKey="name" />;
};

export async function getStaticPaths() {
  const { data } = await client.query({ query: GET_ALL_SPECIES });
  const specieses = data.allSpecies.species;
  const paths = specieses.map((species) => ({
    params: {
      id: species.id,
    },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params: { id } }) {
  const { data } = await client.query({
    query: GET_SPECIES,
    variables: { id },
  });
  return { props: { data: data.species } };
}

export default SpeciesDetail;
