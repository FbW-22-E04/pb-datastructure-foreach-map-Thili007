// Exercise 01

function doubleValues(num) {
  console.log(num.map((num) => num * 2));
}

doubleValues([1, 2, 3]);
doubleValues([2, 4, 6]);

// Exercise 02

const onlyEvenValue = (num) => {
  const valueArry = [];
  num.forEach((element) => {
    if (element % 2 === 0) {
      valueArry.push(element);
    }
  });
  console.log(valueArry);
};

onlyEvenValue([1, 2, 3]);
onlyEvenValue([5, 1, 2, 3, 10]);

console.log("-----------------------------------");
console.log("++++++++++ Next Exercise ++++++++++");

// Exercise 03

const showFirstAndLast = (num) => {
  const newArry = num.map(
    (element) => element.substring(0, 1) + element.substring(element.length - 1)
  );
  console.log(newArry);
};
showFirstAndLast(["colt", "matt", "tim", "udemy"]);
showFirstAndLast(["hi", "goodbye", "smile"]);

console.log("-----------------------------------");
console.log("++++++++++ Next Exercise ++++++++++");

// Exercise 04

const addKeyAndValues = (array, key, val) => {
  const valArry = [];
  array.map((element) => {
    element[key] = val;
    // console.log(element);
    valArry.push(element);
  });
  console.log(valArry);
};

addKeyAndValues(
  [{ name: "Elie" }, { name: "Tim" }, { name: "Matt" }, { name: "Colt" }],
  "title",
  "instructor"
);

console.log("  -----------------------------------");
console.log("  ++++++++++ Next Exercise ++++++++++");

// Exercise 05

const vowelCounts = (val) => {
  const vowels = ["a", "e", "i", "o", "u"];
  const valArray = [];
  const array = [...val.toLowerCase()];

  array.forEach((letter) => {
    if (vowels.includes(letter)) {
      valArray[letter] = (valArray[letter] || 0) + 1;
    }
  });
  console.log(valArray);
};

vowelCounts("Elie");
vowelCounts("Tim");
