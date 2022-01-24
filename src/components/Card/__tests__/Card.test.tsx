import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Card from "..";

describe("Card", () => {
  it("show the children inside card", () => {
    const { getByText } = render(
      <Card>
        <span>something to test</span>
      </Card>
    );
    expect(getByText("something to test")).toBeInTheDocument();
  });
});
