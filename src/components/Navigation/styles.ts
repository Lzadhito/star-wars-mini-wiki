import { css } from "@emotion/react";

export const styNavigation = css`
  position: fixed;
  top: 0;
  left: 0;
  height: 50px;
  width: 100%;
  background-color: black;

  * {
    color: white;
  }

  h1,
  h3 {
    line-height: 1rem;
    margin: 0;
    padding: 0;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    font-weight: bold;
  }

  ul {
    display: flex;
  }

  li {
    display: inline;
    /* margin: 0 3rem; */
  }

  .title {
    display: inline;
    cursor: pointer;
  }

  .navTabWrapper {
    flex: 1;
    margin-right: 20px;
  }

  .navTabContainer {
    overflow-x: scroll;
    /* Hide scrollbar for IE, Edge and Firefox */
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */

    /* display: flex; */
    justify-content: flex-end;
  }

  /* Hide scrollbar for Chrome, Safari and Opera */
  .navTabContainer::-webkit-scrollbar {
    display: none;
  }

  .navTabContainer li {
    margin-left: 2rem;
  }
`;
