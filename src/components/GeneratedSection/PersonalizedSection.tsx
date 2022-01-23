import { camelCaseToSentence } from "@/helpers/camelCaseToSentence";
import Link from "next/link";
import { styGeneratedSection } from "./styles";

interface Props {
  dataKey: string;
  sectionMargin?: string;
  value: { name: string; id: string };
  isBlockSections?: boolean;
}

const PersonalizedSection = ({
  dataKey,
  sectionMargin,
  value,
  isBlockSections,
}: Props) => {
  const { id, name } = value;
  const urlPrefix = dataKey === "homeworld" ? "planets" : dataKey;
  const url = `/${urlPrefix}/${id}`;
  return (
    <section css={styGeneratedSection(sectionMargin, isBlockSections)}>
      <b>
        {camelCaseToSentence(dataKey)}
        {!isBlockSections && ": "}
      </b>
      <Link href={url}>{name}</Link>
    </section>
  );
};

export default PersonalizedSection;
