export const DETAIL_LAYOUT_NORMAL_DATA = {
  __typename: "Species",
  name: "Human",
  classification: "mammal",
  designation: "sentient",
  averageHeight: 180,
  averageLifespan: 120,
  eyeColors: ["brown", "blue", "green", "hazel", "grey", "amber"],
  hairColors: ["blonde", "brown", "black", "red"],
  skinColors: ["caucasian", "black", "asian", "hispanic"],
  language: "Galactic Basic",
  homeworld: {
    __typename: "Planet",
    id: "cGxhbmV0czo5",
    name: "Coruscant",
  },
  personConnection: {
    __typename: "SpeciesPeopleConnection",
    people: [
      {
        __typename: "Person",
        id: "cGVvcGxlOjY2",
        name: "Dormé",
      },
      {
        __typename: "Person",
        id: "cGVvcGxlOjY3",
        name: "Dooku",
      },
      {
        __typename: "Person",
        id: "cGVvcGxlOjY4",
        name: "Bail Prestor Organa",
      },
      {
        __typename: "Person",
        id: "cGVvcGxlOjc0",
        name: "Jocasta Nu",
      },
    ],
  },
  filmConnection: {
    __typename: "SpeciesFilmsConnection",
    films: [
      {
        __typename: "Film",
        id: "ZmlsbXM6MQ==",
        title: "A New Hope",
      },
      {
        __typename: "Film",
        id: "ZmlsbXM6Mg==",
        title: "The Empire Strikes Back",
      },
      {
        __typename: "Film",
        id: "ZmlsbXM6Mw==",
        title: "Return of the Jedi",
      },
      {
        __typename: "Film",
        id: "ZmlsbXM6NA==",
        title: "The Phantom Menace",
      },
      {
        __typename: "Film",
        id: "ZmlsbXM6NQ==",
        title: "Attack of the Clones",
      },
      {
        __typename: "Film",
        id: "ZmlsbXM6Ng==",
        title: "Revenge of the Sith",
      },
    ],
  },
  id: "c3BlY2llczox",
};
