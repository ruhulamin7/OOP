const myStorage = {
  car: {
    inside: {
      "glove box": "maps",
      "passenger seat": "crumbs",
      me: ["ruhul", "amin"],
    },
    outside: {
      trunk: "jack",
    },
  },
};

const {
  car: {
    inside: { me },
  },
} = myStorage;

const nestedObject = {
  Name: "Ruhul",
  Age: 29,
  Country: "Bangladesh",
  Home: {
    Town: { dhaka: ["dhanmondi", "khilkhet"] },
    Village: "naogaon",
  },
};

// nested destructure
const {
  Home: {
    Town: {
      dhaka: [d, k],
    },
  },
} = nestedObject;
console.log(d);
