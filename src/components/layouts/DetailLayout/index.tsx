import Card from "@/components/Card";
import GeneratedSection from "@/components/GeneratedSection";
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
        <GeneratedSection
          data={data}
          excludeKey={titleKey}
          sectionMargin="1rem"
          isBlockSections
        />
      </div>
    </Card>
  );
};

export default DetailLayout;
