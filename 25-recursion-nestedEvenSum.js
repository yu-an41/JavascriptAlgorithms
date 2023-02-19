// Write a recursive function called nestedEvenSum. Return the sum of all even numbers in an object which may contain nested objects.

function nestedEvenSum(object) {
  let sum = 0;
  let values = Object.values(object);

  values.forEach((value) => {
    if (typeof value === "object" && !Array.isArray(value)) {
        sum += nestedEvenSum(value);
    }
    if (typeof value === "number" && value % 2 === 0) {
      sum += value;
    }
  });

  return sum;
}
