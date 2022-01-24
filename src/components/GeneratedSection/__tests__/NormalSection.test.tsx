import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import NormalSection from "../NormalSection";
import {
  NORMAL_SECTION_ARRAY,
  NORMAL_SECTION_SPAN,
} from "../__mocks__/normalSectionData.mock";

jest.mock("@/helpers/camelCaseToSentence", jest.fn());

describe("NormalSection", () => {
  it("show list given array of value", () => {
    const { getByTestId } = render(<NormalSection {...NORMAL_SECTION_ARRAY} />);
    expect(getByTestId("li-Gary Kurtz")).toBeInTheDocument();
  });

  it("show span given array of value", () => {
    const { getByTestId } = render(<NormalSection {...NORMAL_SECTION_SPAN} />);
    expect(getByTestId("span-George Lucas")).toBeInTheDocument();
  });
});
