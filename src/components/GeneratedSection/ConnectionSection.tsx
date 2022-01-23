import Link from "next/link";
import { styGeneratedSection } from "./styles";

interface Props {
  data: any[];
  dataKey: string;
  sectionMargin?: string;
}

const ConnectionSection = ({ data, dataKey, sectionMargin }: Props) => {
  const childPrefix = dataKey.substring(0, dataKey.indexOf("Connection"));
  let childKey = childPrefix;
  if (childPrefix === "person") childKey = "people";
  else if (!childPrefix.endsWith("s")) childKey += "s";

  const childs = data[dataKey][childKey];

  if (childs.length === 0) return <></>;
  return (
    <section css={styGeneratedSection(sectionMargin)}>
      <b className="connectionTitle">{childKey}</b>
      <ul>
        {childs.map((e) => {
          const firstPathname = ["residents", "people"].includes(childKey)
            ? "characters"
            : childKey;
          const url = `/${firstPathname}/${e.id}`;
          const desc = childKey === "films" ? e.title : e.name;

          return (
            <li key={url}>
              <Link href={url}>{desc}</Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
export default ConnectionSection;
