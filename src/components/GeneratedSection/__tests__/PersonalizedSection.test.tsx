import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import PersonalizedSection from "../PersonalizedSection";
import {
  PERSONALIZED_SECTION_HOMEWORLD,
  PERSONALIZED_SECTION_SPECIES,
} from "../__mocks__/personalizedSectionData.mock";

jest.mock("@/helpers/camelCaseToSentence", jest.fn());

describe("PersonalizedSection", () => {
  it("redirect homeworld datakey to planets", () => {
    const { getByTestId } = render(
      <PersonalizedSection {...PERSONALIZED_SECTION_HOMEWORLD} />
    );
    expect(getByTestId("Tatooine-/planets/cGxhbmV0czox")).toBeInTheDocument();
  });

  it("redirect species given datakeys equal species", () => {
    const { getByTestId } = render(
      <PersonalizedSection {...PERSONALIZED_SECTION_SPECIES} />
    );
    expect(getByTestId("Gungan-/species/c3BlY2llczoxMg==")).toBeInTheDocument();
  });
});
