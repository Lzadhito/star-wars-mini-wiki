import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Navigation from "..";

describe("Navigation", () => {
  test.each([
    "Star Wars Wiki",
    "Films",
    "Characters",
    "Species",
    "Planets",
    "Starships",
    "Vehicles",
  ])("%s listed on navigation", (tab) => {
    const { getByText } = render(<Navigation />);
    const tabText = getByText(tab);
    expect(tabText).toBeInTheDocument();
  });

  it.todo("test the link function");
});
