import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from "..";

describe("Footer", () => {
  it("show the github anchor", () => {
    const { getByText } = render(<Footer />);
    expect(getByText("Github")).toBeInTheDocument();
  });
});
