import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import PageLoader from "..";

describe("PageLoader", () => {
  it("show the loading animation", () => {
    const { getByTestId } = render(<PageLoader />);
    expect(getByTestId("loader")).toBeInTheDocument();
  });
});
