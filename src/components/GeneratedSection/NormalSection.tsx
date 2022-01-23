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
}: Props) => {
  const isArrayValue = Array.isArray(value);
  return (
    <section
      css={styGeneratedSection(sectionMargin, isBlockSections || isArrayValue)}
    >
      <b>
        {camelCaseToSentence(dataKey)}
        {!isBlockSections && ": "}
      </b>
      {isArrayValue ? (
        <ul>
          {value.map((v) => (
            <li key={v}>{v}</li>
          ))}
        </ul>
      ) : (
        <span key={value}>{value}</span>
      )}
    </section>
  );
};
export default NormalSection;
