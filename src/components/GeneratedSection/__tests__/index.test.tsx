import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import GeneratedSection from "../";
import {
  GENERATED_SECTION_EMPTY_ARRAY,
  GENERATED_SECTION_EXCLUDE,
  GENERATED_SECTION_HOMEWORLD,
  GENERATED_SECTION_NORMAL,
  GENERATED_SECTION_NULL,
  GENERATED_SECTION_SPECIES_CONNECTION,
  GENERATED_SECTION_TITLE,
} from "../__mocks__/generatedSectionData.mock";

jest.mock("@/helpers/camelCaseToSentence", jest.fn());

describe("GeneratedSection", () => {
  it("return empty fragment given excluded key", () => {
    const { container } = render(
      <GeneratedSection {...GENERATED_SECTION_EXCLUDE} />
    );
    expect(container.firstChild).toBeNull();
  });

  it("return empty fragment given no value", () => {
    const { container } = render(
      <GeneratedSection {...GENERATED_SECTION_NULL} />
    );
    expect(container.firstChild).toBeNull();
  });

  it("return empty fragment given empty array of value", () => {
    const { container } = render(
      <GeneratedSection {...GENERATED_SECTION_EMPTY_ARRAY} />
    );
    expect(container.firstChild).toBeNull();
  });

  it("render h2 given key equals titleKey", () => {
    const { getByText } = render(
      <GeneratedSection {...GENERATED_SECTION_TITLE} />
    );
    expect(getByText("A New Hope")).toBeInTheDocument();
  });

  it("render species given speciesConnection", () => {
    const { getByTestId } = render(
      <GeneratedSection {...GENERATED_SECTION_SPECIES_CONNECTION} />
    );
    expect(getByTestId("Human-/species/c3BlY2llczox")).toBeInTheDocument();
  });

  it("render link to planets given homeworld key", () => {
    const { getByTestId } = render(
      <GeneratedSection {...GENERATED_SECTION_HOMEWORLD} />
    );
    expect(getByTestId("Tatooine-/planets/cGxhbmV0czox")).toBeInTheDocument();
  });

  it("render normal title", () => {
    const { getByText } = render(
      <GeneratedSection {...GENERATED_SECTION_NORMAL} />
    );
    expect(getByText("19BBY")).toBeInTheDocument();
  });
});
