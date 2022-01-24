export const GENERATED_SECTION_EXCLUDE = {
  data: {
    name: "Rodia",
  },
  excludeKey: "name",
  sectionMargin: "1rem",
  isBlockSections: true,
};

export const GENERATED_SECTION_NULL = {
  data: {
    homeworld: null,
  },
  excludeKey: "name",
  sectionMargin: "1rem",
  isBlockSections: true,
};

export const GENERATED_SECTION_EMPTY_ARRAY = {
  data: {
    planets: [],
  },
  excludeKey: "name",
  sectionMargin: "1rem",
  isBlockSections: true,
};

export const GENERATED_SECTION_TITLE = {
  data: {
    title: "A New Hope",
  },
  titleKey: "title",
};

export const GENERATED_SECTION_SPECIES_CONNECTION = {
  data: {
    speciesConnection: {
      species: [
        {
          __typename: "Species",
          id: "c3BlY2llczox",
          name: "Human",
        },
      ],
    },
  },
  excludeKey: "title",
  sectionMargin: "1rem",
  isBlockSections: true,
};

export const GENERATED_SECTION_HOMEWORLD = {
  data: {
    homeworld: {
      __typename: "Planet",
      id: "cGxhbmV0czox",
      name: "Tatooine",
    },
  },
  excludeKey: "name",
  sectionMargin: "1rem",
  isBlockSections: true,
};

export const GENERATED_SECTION_NORMAL = {
  data: {
    birthYear: "19BBY",
  },
  excludeKey: "name",
  sectionMargin: "1rem",
  isBlockSections: true,
};
