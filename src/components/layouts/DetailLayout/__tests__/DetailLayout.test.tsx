import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import DetailLayout from "..";
import { DETAIL_LAYOUT_NORMAL_DATA } from "../__mocks__/detailLayout.mock";

jest.mock("@/helpers/camelCaseToSentence", jest.fn());

describe("DetailLayout", () => {
  it("render pageloader on empty data", () => {
    const { getByTestId } = render(<DetailLayout titleKey="title" />);
    expect(getByTestId("loader")).toBeInTheDocument();
  });
  it("render the title", () => {
    const { getByText } = render(
      <DetailLayout data={DETAIL_LAYOUT_NORMAL_DATA} titleKey="title" />
    );
    expect(getByText("Human")).toBeInTheDocument();
  });
  // @TODO: install next-router-mock
  it.todo("back to previous route on click back button");
});
