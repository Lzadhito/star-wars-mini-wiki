import ConnectionSection from "./ConnectionSection";
import NormalSection from "./NormalSection";
import PersonalizedSection from "./PersonalizedSection";

interface Props {
  data: any[];
  sectionMargin?: string;
  excludeKey?: string;
  primaryKey?: string;
  isBlockSections?: boolean;
}

const GeneratedSection = ({
  data,
  excludeKey,
  sectionMargin,
  primaryKey = "name",
  isBlockSections,
}: Props) => {
  const excludeKeys = ["__typename", "id", excludeKey];
  return (
    <>
      {Object.keys(data).map((key: string, index: number) => {
        const value: any = data[key];
        if (excludeKeys.includes(key) || !value) {
          return <span key={`none-${index}`}></span>;
        } else if (key === primaryKey) {
          return <h2>{value}</h2>;
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
              isBlockSections={isBlockSections}
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
