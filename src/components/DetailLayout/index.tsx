import Card from "@/components/Card";
import GeneratedSection from "../GeneratedSection";
import { styDetailLayout } from "./styles";

interface Props {
  // using any because of how dynamic can be
  data: any[];
  titleKey: string;
}

const DetailLayout = ({ data, titleKey = "name" }: Props) => {
  const title = data[titleKey];
  return (
    <Card>
      <div css={styDetailLayout}>
        <h1>{title}</h1>
        <GeneratedSection data={data} excludeKey="title" sectionMargin="2rem" />
      </div>
    </Card>
  );
};

export default DetailLayout;
