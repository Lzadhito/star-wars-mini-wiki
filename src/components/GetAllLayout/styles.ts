import { css } from "@emotion/react";

export const styGetAllLayout = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;

  .section {
    margin: 1rem 0;
  }
`;
