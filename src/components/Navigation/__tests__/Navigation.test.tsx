import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Navigation from "../Navigation";

describe("Navigation", () => {
  it("renders a heading", () => {
    const { getByText } = render(<Navigation />);
    const starWars = getByText("Star Wars Wiki");

    expect(starWars).toBeInTheDocument();
  });
});
