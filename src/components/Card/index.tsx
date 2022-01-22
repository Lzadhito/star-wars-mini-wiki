import type { SerializedStyles } from "@emotion/react";
import type { ReactNode } from "react";
import styCard from "./styles";

interface Props {
  children: ReactNode;
  css?: SerializedStyles;
}

const Card = ({ children, css }: Props) => (
  <div css={[styCard, css]}>{children}</div>
);

export default Card;
