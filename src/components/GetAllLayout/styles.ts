import { css } from "@emotion/react";

export const styGetAllLayout = (columCount: number) => css`
  column-count: ${columCount};
  column-gap: 1em;

  .section {
    margin: 1rem 0;
  }

  .cardWrapper {
    cursor: pointer;
    display: inline-block;
    margin: 0 0 1em;
    width: 100%;
  }
`;
