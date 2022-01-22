import Card from "@/components/Card";
import { camelCaseToSentence } from "@/helpers/camelCaseToSentence";
import { styGetAllLayout } from "./styles";

interface Props {
  // using any because of how dynamic can be
  data: any[];
}

const GetAllLayout = ({ data }: Props) => {
  return (
    <div css={styGetAllLayout}>
      {data.map((e) => (
        <Card key={e.id}>
          {Object.keys(e).map((key: string, index) => {
            if (key === "__typename" || key === "id")
              return <span key={`none-${index}`}></span>;
            else {
              const value: any = e[key];
              return (
                <div key={`${key}-${value?.toString()}`} className="section">
                  <b>{camelCaseToSentence(key)}</b>
                  {Array.isArray(value) ? (
                    value.map((v) => <div key={v}>{v}</div>)
                  ) : (
                    <div key={value}>{value}</div>
                  )}
                </div>
              );
            }
          })}
        </Card>
      ))}
    </div>
  );
};
export default GetAllLayout;
