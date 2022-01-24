import { Fragment } from "react";
import ConnectionSection from "./ConnectionSection";
import NormalSection from "./NormalSection";
import PersonalizedSection from "./PersonalizedSection";

interface Props {
  data: any[];
  sectionMargin?: string;
  excludeKey?: string;
  titleKey?: string;
  isBlockSections?: boolean;
}

const GeneratedSection = ({
  data,
  excludeKey,
  sectionMargin,
  titleKey = "name",
  isBlockSections,
}: Props) => {
  const excludeKeys = ["__typename", "id", excludeKey];
  return (
    <>
      {Object.keys(data).map((key: string, index: number) => {
        const value: any = data[key];
        if (
          excludeKeys.includes(key) ||
          !value ||
          (Array.isArray(value) && value.length === 0)
        ) {
          return <Fragment key={`none-${index}`}></Fragment>;
        } else if (key === titleKey) {
          return (
            <h2 data-testid={`h2-${value}`} key={value}>
              {value}
            </h2>
          );
        } else if (key.endsWith("Connection")) {
          return (
            <ConnectionSection
              key={`${key}-${value?.toString()}`}
              data={data}
              dataKey={key}
              sectionMargin={sectionMargin}
            />
          );
        } else if (["homeworld", "species"].includes(key)) {
          return (
            <PersonalizedSection
              key={`${key}-${value?.toString()}`}
              dataKey={key}
              sectionMargin={sectionMargin}
              value={value}
            />
          );
        } else {
          return (
            <NormalSection
              key={`${key}-${value?.toString()}`}
              dataKey={key}
              sectionMargin={sectionMargin}
              value={value}
              isBlockSections={isBlockSections}
            />
          );
        }
      })}
    </>
  );
};

export default GeneratedSection;
