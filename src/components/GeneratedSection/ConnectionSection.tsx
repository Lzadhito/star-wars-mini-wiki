import { camelCaseToSentence } from "@/helpers/camelCaseToSentence";
import Link from "next/link";
import { styGeneratedSection } from "./styles";

const ConnectionSection = ({ data, dataKey, sectionMargin }) => {
  const childPrefix = dataKey.substring(0, dataKey.indexOf("Connection"));
  const childKey = childPrefix.endsWith("s") ? childPrefix : childPrefix + "s";
  const childs = data[dataKey][childKey];
  const getChildId = (index: number) =>
    data[dataKey]["edges"][index]["node"]["id"];

  return (
    <section css={styGeneratedSection(sectionMargin)}>
      <b>{childKey}</b>
      <ul>
        {childs.map((e, i) => {
          const url = `/${childKey}/${getChildId(i)}`;
          return (
            <li key={url}>
              <Link href={url}>{e.name}</Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
export default ConnectionSection;
