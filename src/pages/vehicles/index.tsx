import type { NextPage } from "next";
import client from "@/graphql/client";
import GetAllLayout from "@/components/layouts/GetAllLayout";
import GET_ALL_VEHICLES from "@/graphql/get_all_vehicles.graphql";

const AllVehicles: NextPage = ({ data, totalCount }: any) => {
  return <GetAllLayout data={data} totalCount={totalCount} title="Vehicles" />;
};

export async function getStaticProps() {
  const { data } = await client.query({ query: GET_ALL_VEHICLES });
  return {
    props: {
      data: data.allVehicles.vehicles,
      totalCount: data.allVehicles.totalCount,
    },
  };
}

export default AllVehicles;
