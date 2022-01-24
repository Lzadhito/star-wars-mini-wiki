import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import GetAllLayout from "../";
import {
  GET_ALL_LAYOUT_3,
  GET_ALL_LAYOUT_4,
  GET_ALL_LAYOUT_5,
} from "../__mocks__/getAllLayout.mock";

jest.mock("@/helpers/camelCaseToSentence", jest.fn());

describe("GetAllLayout", () => {
  it("render masonry with 3 columns", () => {
    const { getByTestId } = render(<GetAllLayout {...GET_ALL_LAYOUT_3} />);
    expect(getByTestId("masonry-3")).toBeInTheDocument();
  });
  it("render masonry with 4 columns", () => {
    const { getByTestId } = render(<GetAllLayout {...GET_ALL_LAYOUT_4} />);
    expect(getByTestId("masonry-4")).toBeInTheDocument();
  });
  it("render masonry with 5 columns", () => {
    const { getByTestId } = render(<GetAllLayout {...GET_ALL_LAYOUT_5} />);
    expect(getByTestId("masonry-5")).toBeInTheDocument();
  });

  // @TODO: install next-router-mock
  it.todo("onclick will redirect to another page");
});
