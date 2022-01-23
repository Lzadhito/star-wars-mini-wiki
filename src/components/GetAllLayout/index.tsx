import type { ReactText } from "react";
import { useRouter } from "next/router";
import Card from "@/components/Card";
import GeneratedSection from "../GeneratedSection";
import { styGetAllLayout } from "./styles";

interface Props {
  // using any because of how dynamic can be
  data: any[];
}

const GetAllLayout = ({ data }: Props) => {
  const router = useRouter();

  const onClick = (id: ReactText) => {
    router.push(`${router.pathname}/${id}`);
  };

  return (
    <div css={styGetAllLayout}>
      {data.map((e) => (
        <div className="cardWrapper" onClick={() => onClick(e.id)}>
          <Card key={e.id}>
            <GeneratedSection data={e} />
          </Card>
        </div>
      ))}
    </div>
  );
};
export default GetAllLayout;
