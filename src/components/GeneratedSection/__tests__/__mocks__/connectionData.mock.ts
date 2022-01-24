export const CONNECTION_SECTION_PERSONCONNECTION = {
  data: {
    __typename: "Species",
    name: "Cerean",
    classification: "mammal",
    designation: "sentient",
    averageHeight: 200,
    averageLifespan: null,
    eyeColors: ["hazel"],
    hairColors: ["red", "blond", "black", "white"],
    skinColors: ["pale pink"],
    language: "Cerean",
    homeworld: {
      __typename: "Planet",
      id: "cGxhbmV0czo0Mw==",
      name: "Cerea",
    },
    personConnection: {
      __typename: "SpeciesPeopleConnection",
      people: [
        {
          __typename: "Person",
          id: "cGVvcGxlOjUy",
          name: "Ki-Adi-Mundi",
        },
      ],
    },
    filmConnection: {
      __typename: "SpeciesFilmsConnection",
      films: [
        {
          __typename: "Film",
          id: "ZmlsbXM6NA==",
          title: "The Phantom Menace",
        },
        {
          __typename: "Film",
          id: "ZmlsbXM6Ng==",
          title: "Revenge of the Sith",
        },
      ],
    },
    id: "c3BlY2llczoyMA==",
  },
  dataKey: "personConnection",
  sectionMargin: "1rem",
};

export const CONNECTION_SECTION_EMPTY_VALUE = {
  data: {
    __typename: "Vehicle",
    name: "Sand Crawler",
    model: "Digger Crawler",
    vehicleClass: "wheeled",
    manufacturers: ["Corellia Mining Corporation"],
    costInCredits: 150000,
    length: 36.8,
    crew: "46",
    passengers: "30",
    maxAtmospheringSpeed: 30,
    cargoCapacity: 50000,
    consumables: "2 months",
    pilotConnection: {
      __typename: "VehiclePilotsConnection",
      pilots: [],
    },
    filmConnection: {
      __typename: "VehicleFilmsConnection",
      films: [
        {
          __typename: "Film",
          id: "ZmlsbXM6MQ==",
          title: "A New Hope",
        },
        {
          __typename: "Film",
          id: "ZmlsbXM6NQ==",
          title: "Attack of the Clones",
        },
      ],
    },
    id: "dmVoaWNsZXM6NA==",
  },
  dataKey: "pilotConnection",
  sectionMargin: "1rem",
};

export const CONNECTION_SECTION_FILMCONNECTION = {
  data: {
    __typename: "Species",
    name: "Cerean",
    classification: "mammal",
    designation: "sentient",
    averageHeight: 200,
    averageLifespan: null,
    eyeColors: ["hazel"],
    hairColors: ["red", "blond", "black", "white"],
    skinColors: ["pale pink"],
    language: "Cerean",
    homeworld: {
      __typename: "Planet",
      id: "cGxhbmV0czo0Mw==",
      name: "Cerea",
    },
    personConnection: {
      __typename: "SpeciesPeopleConnection",
      people: [
        {
          __typename: "Person",
          id: "cGVvcGxlOjUy",
          name: "Ki-Adi-Mundi",
        },
      ],
    },
    filmConnection: {
      __typename: "SpeciesFilmsConnection",
      films: [
        {
          __typename: "Film",
          id: "ZmlsbXM6NA==",
          title: "The Phantom Menace",
        },
        {
          __typename: "Film",
          id: "ZmlsbXM6Ng==",
          title: "Revenge of the Sith",
        },
      ],
    },
    id: "c3BlY2llczoyMA==",
  },
  dataKey: "filmConnection",
  sectionMargin: "1rem",
};

export const CONNECTION_SECTION_PILOTCONNECTION = {
  data: {
    __typename: "Starship",
    name: "Imperial shuttle",
    model: "Lambda-class T-4a shuttle",
    starshipClass: "Armed government transport",
    manufacturers: ["Sienar Fleet Systems"],
    costInCredits: 240000,
    length: 20,
    crew: "6",
    passengers: "20",
    maxAtmospheringSpeed: 850,
    hyperdriveRating: 1,
    MGLT: 50,
    cargoCapacity: 80000,
    consumables: "2 months",
    pilotConnection: {
      __typename: "StarshipPilotsConnection",
      pilots: [
        {
          __typename: "Person",
          id: "cGVvcGxlOjE=",
          name: "Luke Skywalker",
        },
        {
          __typename: "Person",
          id: "cGVvcGxlOjEz",
          name: "Chewbacca",
        },
        {
          __typename: "Person",
          id: "cGVvcGxlOjE0",
          name: "Han Solo",
        },
      ],
    },
    filmConnection: {
      __typename: "StarshipFilmsConnection",
      films: [
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
      ],
    },
    id: "c3RhcnNoaXBzOjIy",
  },
  dataKey: "pilotConnection",
  sectionMargin: "1rem",
};

export const CONNECTION_SECTION_SPECIESCONNECTION = {
  data: {
    __typename: "Film",
    id: "ZmlsbXM6Mw==",
    title: "Return of the Jedi",
    openingCrawl:
      "Luke Skywalker has returned to\r\nhis home planet of Tatooine in\r\nan attempt to rescue his\r\nfriend Han Solo from the\r\nclutches of the vile gangster\r\nJabba the Hutt.\r\n\r\nLittle does Luke know that the\r\nGALACTIC EMPIRE has secretly\r\nbegun construction on a new\r\narmored space station even\r\nmore powerful than the first\r\ndreaded Death Star.\r\n\r\nWhen completed, this ultimate\r\nweapon will spell certain doom\r\nfor the small band of rebels\r\nstruggling to restore freedom\r\nto the galaxy...",
    director: "Richard Marquand",
    producers: ["Howard G. Kazanjian", "George Lucas", "Rick McCallum"],
    releaseDate: "1983-05-25",
    speciesConnection: {
      __typename: "FilmSpeciesConnection",
      species: [
        {
          __typename: "Species",
          id: "c3BlY2llczox",
          name: "Human",
        },
        {
          __typename: "Species",
          id: "c3BlY2llczoy",
          name: "Droid",
        },
        {
          __typename: "Species",
          id: "c3BlY2llczoz",
          name: "Wookie",
        },
        {
          __typename: "Species",
          id: "c3BlY2llczo1",
          name: "Hutt",
        },
        {
          __typename: "Species",
          id: "c3BlY2llczo2",
          name: "Yoda's species",
        },
        {
          __typename: "Species",
          id: "c3BlY2llczo4",
          name: "Mon Calamari",
        },
        {
          __typename: "Species",
          id: "c3BlY2llczo5",
          name: "Ewok",
        },
        {
          __typename: "Species",
          id: "c3BlY2llczoxMA==",
          name: "Sullustan",
        },
        {
          __typename: "Species",
          id: "c3BlY2llczoxNQ==",
          name: "Twi'lek",
        },
      ],
    },
    starshipConnection: {
      __typename: "FilmStarshipsConnection",
      starships: [
        {
          __typename: "Starship",
          id: "c3RhcnNoaXBzOjI=",
          name: "CR90 corvette",
        },
        {
          __typename: "Starship",
          id: "c3RhcnNoaXBzOjM=",
          name: "Star Destroyer",
        },
        {
          __typename: "Starship",
          id: "c3RhcnNoaXBzOjEw",
          name: "Millennium Falcon",
        },
        {
          __typename: "Starship",
          id: "c3RhcnNoaXBzOjEx",
          name: "Y-wing",
        },
        {
          __typename: "Starship",
          id: "c3RhcnNoaXBzOjEy",
          name: "X-wing",
        },
        {
          __typename: "Starship",
          id: "c3RhcnNoaXBzOjE1",
          name: "Executor",
        },
        {
          __typename: "Starship",
          id: "c3RhcnNoaXBzOjE3",
          name: "Rebel transport",
        },
        {
          __typename: "Starship",
          id: "c3RhcnNoaXBzOjIy",
          name: "Imperial shuttle",
        },
        {
          __typename: "Starship",
          id: "c3RhcnNoaXBzOjIz",
          name: "EF76 Nebulon-B escort frigate",
        },
        {
          __typename: "Starship",
          id: "c3RhcnNoaXBzOjI3",
          name: "Calamari Cruiser",
        },
        {
          __typename: "Starship",
          id: "c3RhcnNoaXBzOjI4",
          name: "A-wing",
        },
        {
          __typename: "Starship",
          id: "c3RhcnNoaXBzOjI5",
          name: "B-wing",
        },
      ],
    },
    vehicleConnection: {
      __typename: "FilmVehiclesConnection",
      vehicles: [
        {
          __typename: "Vehicle",
          id: "dmVoaWNsZXM6OA==",
          name: "TIE/LN starfighter",
        },
        {
          __typename: "Vehicle",
          id: "dmVoaWNsZXM6MTY=",
          name: "TIE bomber",
        },
        {
          __typename: "Vehicle",
          id: "dmVoaWNsZXM6MTg=",
          name: "AT-AT",
        },
        {
          __typename: "Vehicle",
          id: "dmVoaWNsZXM6MTk=",
          name: "AT-ST",
        },
        {
          __typename: "Vehicle",
          id: "dmVoaWNsZXM6MjQ=",
          name: "Sail barge",
        },
        {
          __typename: "Vehicle",
          id: "dmVoaWNsZXM6MjU=",
          name: "Bantha-II cargo skiff",
        },
        {
          __typename: "Vehicle",
          id: "dmVoaWNsZXM6MjY=",
          name: "TIE/IN interceptor",
        },
        {
          __typename: "Vehicle",
          id: "dmVoaWNsZXM6MzA=",
          name: "Imperial Speeder Bike",
        },
      ],
    },
    characterConnection: {
      __typename: "FilmCharactersConnection",
      characters: [
        {
          __typename: "Person",
          id: "cGVvcGxlOjE=",
          name: "Luke Skywalker",
        },
        {
          __typename: "Person",
          id: "cGVvcGxlOjI=",
          name: "C-3PO",
        },
        {
          __typename: "Person",
          id: "cGVvcGxlOjM=",
          name: "R2-D2",
        },
        {
          __typename: "Person",
          id: "cGVvcGxlOjQ=",
          name: "Darth Vader",
        },
        {
          __typename: "Person",
          id: "cGVvcGxlOjU=",
          name: "Leia Organa",
        },
        {
          __typename: "Person",
          id: "cGVvcGxlOjEw",
          name: "Obi-Wan Kenobi",
        },
        {
          __typename: "Person",
          id: "cGVvcGxlOjEz",
          name: "Chewbacca",
        },
        {
          __typename: "Person",
          id: "cGVvcGxlOjE0",
          name: "Han Solo",
        },
        {
          __typename: "Person",
          id: "cGVvcGxlOjE2",
          name: "Jabba Desilijic Tiure",
        },
        {
          __typename: "Person",
          id: "cGVvcGxlOjE4",
          name: "Wedge Antilles",
        },
        {
          __typename: "Person",
          id: "cGVvcGxlOjIw",
          name: "Yoda",
        },
        {
          __typename: "Person",
          id: "cGVvcGxlOjIx",
          name: "Palpatine",
        },
        {
          __typename: "Person",
          id: "cGVvcGxlOjIy",
          name: "Boba Fett",
        },
        {
          __typename: "Person",
          id: "cGVvcGxlOjI1",
          name: "Lando Calrissian",
        },
        {
          __typename: "Person",
          id: "cGVvcGxlOjI3",
          name: "Ackbar",
        },
        {
          __typename: "Person",
          id: "cGVvcGxlOjI4",
          name: "Mon Mothma",
        },
        {
          __typename: "Person",
          id: "cGVvcGxlOjI5",
          name: "Arvel Crynyd",
        },
        {
          __typename: "Person",
          id: "cGVvcGxlOjMw",
          name: "Wicket Systri Warrick",
        },
        {
          __typename: "Person",
          id: "cGVvcGxlOjMx",
          name: "Nien Nunb",
        },
        {
          __typename: "Person",
          id: "cGVvcGxlOjQ1",
          name: "Bib Fortuna",
        },
      ],
    },
    planetConnection: {
      __typename: "FilmPlanetsConnection",
      planets: [
        {
          __typename: "Planet",
          id: "cGxhbmV0czox",
          name: "Tatooine",
        },
        {
          __typename: "Planet",
          id: "cGxhbmV0czo1",
          name: "Dagobah",
        },
        {
          __typename: "Planet",
          id: "cGxhbmV0czo3",
          name: "Endor",
        },
        {
          __typename: "Planet",
          id: "cGxhbmV0czo4",
          name: "Naboo",
        },
        {
          __typename: "Planet",
          id: "cGxhbmV0czo5",
          name: "Coruscant",
        },
      ],
    },
  },
  dataKey: "speciesConnection",
  sectionMargin: "1rem",
};
