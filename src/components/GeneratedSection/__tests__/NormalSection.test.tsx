import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import ConnectionSection from "../ConnectionSection";
import {
  CONNECTION_SECTION_EMPTY_VALUE,
  CONNECTION_SECTION_FILMCONNECTION,
  CONNECTION_SECTION_PERSONCONNECTION,
  CONNECTION_SECTION_PILOTCONNECTION,
  CONNECTION_SECTION_SPECIESCONNECTION,
} from "./__mocks__/connectionData.mock";

describe("ConnectionSection", () => {
  it("return null given empty array value", () => {
    const { container } = render(
      <ConnectionSection {...CONNECTION_SECTION_EMPTY_VALUE} />
    );
    expect(container.firstChild).toBeNull();
  });

  it("render personConnection as People", () => {
    const { getByText } = render(
      <ConnectionSection {...CONNECTION_SECTION_PERSONCONNECTION} />
    );
    expect(getByText("people")).toBeInTheDocument();
  });

  it("render filmConnection by the title", () => {
    const { getByText } = render(
      <ConnectionSection {...CONNECTION_SECTION_FILMCONNECTION} />
    );
    expect(getByText("The Phantom Menace")).toBeInTheDocument();
  });

  it("redirect pilots as characters", () => {
    const { getByTestId } = render(
      <ConnectionSection {...CONNECTION_SECTION_PILOTCONNECTION} />
    );
    expect(
      getByTestId("Chewbacca-/characters/cGVvcGxlOjEz")
    ).toBeInTheDocument();
  });

  it("render speciesConnection as Species", () => {
    const { getByText } = render(
      <ConnectionSection {...CONNECTION_SECTION_SPECIESCONNECTION} />
    );
    expect(getByText("species")).toBeInTheDocument();
  });
});
