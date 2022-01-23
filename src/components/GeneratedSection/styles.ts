import { css } from "@emotion/react";

export const styGeneratedSection = (
  sectionMargin = "1rem",
  isBlockSections = false
) => css`
  margin: ${sectionMargin} 0;

  b {
    margin: 1rem 0;
    ${isBlockSections && `display: block;`}
    text-transform: capitalize;
  }

  .connectionTitle {
    display: block;
  }

  ul {
    padding-left: 1rem;
    margin: 0;
  }

  .connectionListWrapper {
    margin-left: -1rem;
  }

  .connectionListNode {
    float: left;
    margin: 0 1rem 1rem 1rem;
  }
`;
