import { css } from "@emotion/react";

export const styGeneratedSection = (sectionMargin = "1rem") => css`
  margin: ${sectionMargin} 0;

  ul {
    margin: 0;
    margin-left: -50px;
  }

  li {
    float: left;
    margin: 20px;
  }
`;
