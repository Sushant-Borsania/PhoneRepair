const initState = {
  project: [
    {
      companyName: "Samsung",
      id: "samsung",
      phones: [
        { phoneName: "Galaxy s8", alias: "s8", colors: ["Brick Red", "Gold", "Violet"]},
        { phoneName: "Galaxy s9", alias: "s9", colors: ["Gold", "White", "Black"] },
        { phoneName: "Galaxy s10", alias: "s10", colors: ["Gold", "White", "Black"] },
        { phoneName: "Galaxy Note 10", alias: "s10", colors: ["Brick Red", "Gold", "Violet"] },
        { phoneName: "Galaxy Note 7", alias: "s10", colors: ["Gold", "White", "Black"] },
        { phoneName: "Galaxy Note 9", alias: "s10", colors: ["Sky Blue", "Gold", "Violet"] },
        { phoneName: "Galaxy Golden", alias: "s10", colors: ["Gold", "White", "Black"] },
        { phoneName: "Galaxy Edge", alias: "s10", colors: ["Brick Red", "Gold", "Violet"] },
        { phoneName: "Galaxy A8", alias: "s10", colors: ["Sky Blue", "Gold", "Violet"] },
        { phoneName: "Galaxy A9", alias: "s10", colors: ["Brick Red", "Gold", "Violet"] }
      ]
    },
    {
      companyName: "Apple",
      id: "apple",
      phones: [
        { phoneName: "Iphone8", alias: "i8", colors: ["Sky Blue", "Gold", "Violet"] },
        { phoneName: "Iphone9", alias: "i9", colors: ["Sky Blue", "White", "Black"] },
        { phoneName: "Iphone10", alias: "i10", colors: ["Sky Blue", "Gold", "Plain Black"]},
        { phoneName: "IphoneX", alias: "iX", colors: ["Sky Blue", "Gold", "Plain Black"] },
        { phoneName: "Iphone 7", alias: "i7", colors: ["Sky Blue", "White", "Black"] },
        { phoneName: "XR", alias: "XR", colors: ["Sky Blue", "Gold", "Plain Black"]},
        { phoneName: "XS", alias: "XS", colors: ["Sky Blue", "White", "Black"] },
        { phoneName: "XS max", alias: "XS-MAX", colors: ["White", "Gold", "Black"] }
      ]
    },
    {
      companyName: "LG",
      id: "lg",
      phones: [
        { phoneName: "G2", alias: "g2", colors: ["Sky Blue", "Gold", "Plain Black"] },
        { phoneName: "G3", alias: "g3", colors: ["Brick red", "Silver", "Black"] },
        { phoneName: "G4", alias: "g4", colors: ["Sky Blue", "Gold", "Gold"] }
      ]
    },
    {
      companyName: "Razor",
      id: "razor",
      phones: [
        { phoneName: "z8", alias: "z8", colors: ["Brick Red", "Gold", "Violet"] }, 
        { phoneName: "z9", alias: "z9", colors: ["Brick red", "Silver", "Black"]}, 
        { phoneName: "z10",alias: "z10", colors: ["Sky Blue", "Gold", "Gold"] }
      ]
    },
    {
      companyName: "OnePlus",
      id: "oneplus",
      phones: [
        { phoneName: "onePlus 7", alias: "onePlus7", colors: ["Brick Red", "Gold", "Violet"] },
        { phoneName: "onePlus 8", alias: "onePlus8", colors: ["Sky Blue", "Gold", "Plain Black"] },
        { phoneName: "onePlus 9", alias: "onePlus9", colors: ["Brick red", "Silver", "Black"] }
      ]
    }
  ]
};

const phoneReducers = (state = initState, action) => {
  return state;
};

export default phoneReducers;
