import ConnectionSection from "./ConnectionSection";
import NormalSection from "./NormalSection";

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
          return (
            <ConnectionSection
              key={`${key}-${data[key].toString()}`}
              data={data}
              dataKey={key}
              sectionMargin={sectionMargin}
            />
          );
        } else {
          const value: any = data[key];
          return (
            <NormalSection
              key={`${key}-${value?.toString()}`}
              dataKey={key}
              sectionMargin={sectionMargin}
              value={value}
            />
          );
        }
      })}
    </>
  );
};

export default GeneratedSection;
