import { camelCaseToSentence } from "@/helpers/camelCaseToSentence";
import Link from "next/link";
import { styGeneratedSection } from "./styles";

interface Props {
  dataKey: string;
  sectionMargin?: string;
  value: { name: string; id: string };
}

const PersonalizedSection = ({ dataKey, sectionMargin, value }: Props) => {
  const { id, name } = value;
  const urlPrefix = dataKey === "homeworld" ? "planets" : dataKey;
  const url = `/${urlPrefix}/${id}`;
  return (
    <section css={styGeneratedSection(sectionMargin, true)}>
      <b>{camelCaseToSentence(dataKey)}</b>
      <Link href={url} passHref>
        <a data-testid={`${name}-${url}`}>{name}</a>
      </Link>
    </section>
  );
};

export default PersonalizedSection;
