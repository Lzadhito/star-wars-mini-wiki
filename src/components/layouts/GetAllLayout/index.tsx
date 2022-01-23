import type { ReactText } from "react";
import { useRouter } from "next/router";

import Card from "@/components/Card";
import GeneratedSection from "@/components/GeneratedSection";
import { styGetAllLayout } from "./styles";

interface Props {
  // using any because of how dynamic can be
  data: any[];
  totalCount: number;
  primaryKey?: string;
  title: string;
}

const GetAllLayout = ({ data, totalCount, primaryKey, title }: Props) => {
  const router = useRouter();

  const onClick = (id: ReactText) => {
    router.push(`${router.pathname}/${id}`);
  };

  const masonryColumn = totalCount >= 50 ? 5 : totalCount >= 20 ? 4 : 3;

  return (
    <div css={styGetAllLayout(masonryColumn)}>
      <h1>{title}</h1>
      <div className="masonry">
        {data.map((e) => (
          <div className="cardWrapper" onClick={() => onClick(e.id)} key={e.id}>
            <Card>
              <GeneratedSection data={e} primaryKey={primaryKey} />
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};
export default GetAllLayout;
