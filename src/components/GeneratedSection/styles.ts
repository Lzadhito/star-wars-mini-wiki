import { css } from "@emotion/react";

export const styGeneratedSection = (
  sectionMargin = "1rem",
  isBlockSections = false
) => css`
  margin: ${sectionMargin} 0;

  b {
    margin: 1em 0;
    ${isBlockSections && `display: block;`}
    text-transform: capitalize;
  }

  .connectionTitle {
    display: block;
  }

  ul {
    margin: 0;
    margin-left: -50px;
  }

  li {
    float: left;
    margin: 20px;
  }
`;
