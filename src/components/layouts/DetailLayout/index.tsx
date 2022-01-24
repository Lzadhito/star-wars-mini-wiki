import Card from "@/components/Card";
import GeneratedSection from "@/components/GeneratedSection";
import PageLoader from "@/components/PageLoader";
import Image from "next/image";
import { useRouter } from "next/router";
import { styDetailLayout } from "./styles";

interface Props {
  // using any because of how dynamic can be
  data: any[];
  titleKey: string;
}

const DetailLayout = ({ data, titleKey = "name" }: Props) => {
  const router = useRouter();

  const onClickBackBtn = () => {
    router.back();
  };

  if (!data) return <PageLoader />;

  return (
    <div css={styDetailLayout}>
      <Card>
        <button className="backBtn" onClick={onClickBackBtn}>
          <Image src="/icons/back.svg" width={20} height={20} alt="back-icon" />{" "}
          Back
        </button>
        <div className="container">
          <h1>{data[titleKey]}</h1>
          <GeneratedSection
            data={data}
            excludeKey={titleKey}
            sectionMargin="1rem"
            isBlockSections
          />
        </div>
      </Card>
    </div>
  );
};

export default DetailLayout;
