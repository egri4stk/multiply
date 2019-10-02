const stringToReversNumbersArr = (str) =>{
  return str.toString().split('').reverse().map(char => parseInt(char));
}

const multiply = (a, b) => {
  const aNumbers = stringToReversNumbersArr(a);
  const bNumbers = stringToReversNumbersArr(b);

  const multiVector = [];

  aNumbers.forEach((n_a, i) => {
    bNumbers.forEach((n_b, j) => {
      if (!multiVector[i + j]) {
        multiVector[i + j] = 0;
      }
      multiVector[i + j] += n_a * n_b;
    });
  });

  const answerArr = multiVector.map((n, i, arr) => {
    if (n <= 9) {
      return n;
    } else if (i !== arr.length -1 ) {
      arr[i + 1] += Math.trunc(n / 10);
      return n % 10;
    } else {
      return n;
    }
  });

  return answerArr.reverse().join('');

};

module.exports = {
  multiply
};