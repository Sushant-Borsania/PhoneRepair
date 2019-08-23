const initState = {
  project: [
    {
      companyName: "Samsung",
      id: "samsung",
      phones: [
        { phoneName: "Galaxy s8", alias: "s8", colors: ["red", "green", "violet"] },
        { phoneName: "Galaxy s9", alias: "s9", colors: ["pink", "orange", "black"] },
        { phoneName: "Galaxy s10", alias: "s10", colors: ["blue", "yellow", "green"] }
      ]
    },
    {
      companyName: "Apple",
      id: "apple",
      phones: [
        { phoneName: "Iphone8", alias: "i8", colors: ["red", "green", "violet"] },
        { phoneName: "Iphone9", alias: "i9", colors: ["pink", "orange", "black"] },
        { phoneName: "Iphone10", alias: "i10", colors: ["blue", "yellow", "green"] }
      ]
    },
    {
      companyName: "LG",
      id: "lg",
      phones: [
        { phoneName: "G2", alias: "g2", colors: ["red", "green", "violet"] },
        { phoneName: "G3", alias: "g3", colors: ["pink", "orange", "black"] },
        { phoneName: "G4", alias: "g4", colors: ["blue", "yellow", "green"] }
      ]
    }
  ]
};

const phoneReducers = (state = initState, action) => {
  return state;
};

export default phoneReducers;