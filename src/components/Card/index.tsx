import type { SerializedStyles } from "@emotion/react";
import type { ReactNode } from "react";
import styCard from "./styles";

interface Props {
  children: ReactNode;
  className?: SerializedStyles;
}

const Card = ({ children, className }: Props) => (
  <div css={[styCard, className]}>{children}</div>
);

export default Card;
