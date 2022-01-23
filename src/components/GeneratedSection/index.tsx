import { camelCaseToSentence } from "@/helpers/camelCaseToSentence";
import Link from "next/link";
import { styGeneratedSection } from "./styles";

interface Props {
  data: any[];
  sectionMargin?: string;
  excludeKey?: string;
}

const GeneratedSection = ({
  data,
  excludeKey = "name",
  sectionMargin,
}: Props) => {
  const excludeKeys = ["__typename", "id", excludeKey];
  return (
    <>
      {Object.keys(data).map((key: string, index: number) => {
        if (excludeKeys.includes(key))
          return <span key={`none-${index}`}></span>;
        else if (key.endsWith("Connection")) {
          const childPrefix = key.substring(0, key.indexOf("Connection"));
          const childKey = childPrefix.endsWith("s")
            ? childPrefix
            : childPrefix + "s";
          const childs = data[key][childKey];
          const getChildId = (index: number) =>
            data[key]["edges"][index]["node"]["id"];

          return (
            <section
              key={`${key}-${childs?.toString()}`}
              css={styGeneratedSection(sectionMargin)}
            >
              <b>{camelCaseToSentence(key)}</b>
              <ul>
                {childs.map((e, i) => {
                  const url = `${childPrefix}/${getChildId(i)}`;
                  return (
                    <li key={url}>
                      <Link href={url}>{e.name}</Link>
                    </li>
                  );
                })}
              </ul>
            </section>
          );
        } else {
          const value: any = data[key];
          return (
            <section
              key={`${key}-${value?.toString()}`}
              css={styGeneratedSection(sectionMargin)}
            >
              <b>{camelCaseToSentence(key)}</b>
              {Array.isArray(value) ? (
                value.map((v) => <p key={v}>{v}</p>)
              ) : (
                <p key={value}>{value}</p>
              )}
            </section>
          );
        }
      })}
    </>
  );
};

export default GeneratedSection;
