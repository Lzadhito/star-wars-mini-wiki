import Card from "@/components/Card";
import GeneratedSection from "../GeneratedSection";
import { styGetAllLayout } from "./styles";

interface Props {
  // using any because of how dynamic can be
  data: any[];
}

const GetAllLayout = ({ data }: Props) => {
  return (
    <div css={styGetAllLayout}>
      {data.map((e) => (
        <Card key={e.id}>
          <GeneratedSection data={e} />
        </Card>
      ))}
    </div>
  );
};
export default GetAllLayout;
