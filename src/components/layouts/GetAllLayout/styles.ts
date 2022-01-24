import { css } from "@emotion/react";

export const styGetAllLayout = (columCount: number) => css`
  margin: 10vh 0;

  h1 {
    text-align: center;
  }

  .masonry {
    column-count: ${columCount};
    column-gap: 1em;
    margin: 0 5vw;
  }

  .section {
    margin: 1rem 0;
  }

  button {
    background: none;
    border: none;
    font-size: inherit;
    text-align: inherit;
  }

  .cardWrapper {
    cursor: pointer;
    display: inline-block;
    margin: 0 0 1em;
    width: 100%;
  }
`;
