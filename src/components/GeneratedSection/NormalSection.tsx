import { camelCaseToSentence } from "@/helpers/camelCaseToSentence";
import { styGeneratedSection } from "./styles";

const NormalSection = ({ dataKey, sectionMargin, value }) => (
  <section css={styGeneratedSection(sectionMargin)}>
    <b>{camelCaseToSentence(dataKey)}</b>
    {Array.isArray(value) ? (
      value.map((v) => <p key={v}>{v}</p>)
    ) : (
      <p key={value}>{value}</p>
    )}
  </section>
);
export default NormalSection;
