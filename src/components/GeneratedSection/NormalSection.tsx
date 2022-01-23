import { camelCaseToSentence } from "@/helpers/camelCaseToSentence";
import { styGeneratedSection } from "./styles";

interface Props {
  dataKey: string;
  sectionMargin?: string;
  value: string | number | string[] | number[];
  isBlockSections?: boolean;
}

const NormalSection = ({
  dataKey,
  sectionMargin,
  value,
  isBlockSections,
}: Props) => (
  <section css={styGeneratedSection(sectionMargin, isBlockSections)}>
    <b>
      {camelCaseToSentence(dataKey)}
      {!isBlockSections && ": "}
    </b>
    {Array.isArray(value) ? (
      value.map((v) => <p key={v}>{v}</p>)
    ) : (
      <span key={value}>{value}</span>
    )}
  </section>
);
export default NormalSection;
