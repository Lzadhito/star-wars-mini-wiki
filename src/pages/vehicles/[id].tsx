import type { NextPage } from "next";
import client from "@/graphql/client";
import GET_ALL_VEHICLES from "@/graphql/get_all_vehicles.graphql";
import GET_VEHICLE from "@/graphql/get_vehicle.graphql";
import DetailLayout from "@/components/layouts/DetailLayout";

const VehicleDetail: NextPage = ({ data }: any) => {
  return <DetailLayout data={data} titleKey="name" />;
};

export async function getStaticPaths() {
  const { data } = await client.query({ query: GET_ALL_VEHICLES });
  const vehicles = data.allVehicles.vehicles;
  const paths = vehicles.map((vehicle) => ({
    params: {
      id: vehicle.id,
    },
  }));
  return { paths, fallback: "blocking" };
}

export async function getStaticProps({ params: { id } }) {
  const { data } = await client.query({
    query: GET_VEHICLE,
    variables: { id },
  });
  return { props: { data: data.vehicle } };
}

export default VehicleDetail;
