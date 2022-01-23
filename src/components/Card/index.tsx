import type { SerializedStyles } from "@emotion/react";
import type { ReactNode } from "react";
import styCard from "./styles";

interface Props {
  children: ReactNode;
}

const Card = ({ children }: Props) => <div css={styCard}>{children}</div>;

export default Card;
