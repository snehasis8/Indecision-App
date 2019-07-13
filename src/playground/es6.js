console.log("Connected the es6 file");
const multiplier = {
  number: [1, 2, 3, 4, 5, 6],
  multipleBy: 2,
  multiply: function () {
    return this.number.map((x) => x = x * 2);
  }
};

console.log(multiplier.multiply());
