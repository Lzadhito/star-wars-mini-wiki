import { camelCaseToSentence } from "src/helpers/camelCaseToSentence";
import Card from "@/components/Card";
import styGetAllCard from "./styles";

interface Props {
  // using any because of how dynamic can be
  data: any;
}

const GetAllCard = ({ data }: Props) => {
  const keys = Object.keys(data);
  return (
    <Card className={styGetAllCard}>
      {keys.map((key: string, index) => {
        if (key === "__typename" || key === "id")
          return <span key={`none-${index}`}></span>;
        else {
          const value: any = data[key];
          return (
            <div key={`${key}-${value?.toString()}`}>
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
  );
};

export default GetAllCard;