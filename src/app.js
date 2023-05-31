// revese number
const reverseNumber = (num) => {
  num = num + "";
  return num.split("").reverse().join("");
};
const reverseNumberButton = document.getElementById("reverseNumberButton");
const reverseNumberInput = document.getElementById("reverseNumberInput");
const reverseNumberResult = document.getElementById("reverseNumberResult");
reverseNumberResult.style.display = "none";
reverseNumberButton.addEventListener("click", () => {
  reverseNumberResult.style.display = "flex";
  reverseNumberResult.innerHTML = reverseNumber(reverseNumberInput.value);
});

// to upper case
const upperCase = (str) => {
  let arr = str.split(" ");
  let newArr = [];

  for (let x = 0; x < arr.length; x++) {
    newArr.push(arr[x].charAt(0).toUpperCase() + arr[x].slice(1));
  }
  return newArr.join(" ");
};
const upperCaseButton = document.getElementById("upperCaseButton");
const upperCaseInput = document.getElementById("upperCaseInput");
const upperCaseResult = document.getElementById("upperCaseResult");
upperCaseResult.style.display = "none";
upperCaseButton.addEventListener("click", () => {
  upperCaseResult.style.display = "flex";
  upperCaseResult.innerHTML = upperCase(upperCaseInput.value);
});

// count vowels
const vowelCount = (str) => {
  let char = "aeiouAEIOU";
  let count = 0;

  for (let x = 0; x < str.length; x++) {
    if (char.indexOf(str[x]) !== -1) {
      count += 1;
    }
  }
  return count;
};
const vowelCountButton = document.getElementById("vowelCountButton");
const vowelCountInput = document.getElementById("vowelCountInput");
const vowelCountResult = document.getElementById("vowelCountResult");
vowelCountResult.style.display = "none";
vowelCountButton.addEventListener("click", () => {
  vowelCountResult.style.display = "flex";
  vowelCountResult.innerHTML = vowelCount(vowelCountInput.value);
});

// prime number
const primeNumber = (num) => {
  if (num === 1) {
    return false;
  } else if (num === 2) {
    return true;
  } else {
    for (let x = 2; x < num; x++) {
      if (num % x === 0) {
        return false;
      }
    }
    return true;
  }
};
const primeNumberButton = document.getElementById("primeNumberButton");
const primeNumberInput = document.getElementById("primeNumberInput");
const primeNumberResult = document.getElementById("primeNumberResult");
primeNumberResult.style.display = "none";
primeNumberButton.addEventListener("click", () => {
  primeNumberResult.style.display = "flex";
  primeNumberResult.innerHTML = primeNumber(primeNumberInput.value);
});

// longest word
const longestWord = (str) => {
  let arr = str.split(" ");
  let longest = 0;
  let word = null;

  for (let x = 0; x < arr.length; x++) {
    if (longest < arr[x].length) {
      longest = arr[x].length;
      word = arr[x];
    }
  }
  return word;
};

const longestWordButton = document.getElementById("longestWordButton");
const longestWordInput = document.getElementById("longestWordInput");
const longestWordResult = document.getElementById("longestWordResult");
longestWordResult.style.display = "none";
longestWordButton.addEventListener("click", () => {
  longestWordResult.style.display = "flex";
  longestWordResult.innerHTML = longestWord(longestWordInput.value);
});

// alphabet order
const alphabeticalOrder = (str) => {
  return str.split("").sort().join("");
};
const alphabeticalOrderButton = document.getElementById(
  "alphabeticalOrderButton"
);
const alphabeticalOrderInput = document.getElementById(
  "alphabeticalOrderInput"
);
const alphabeticalOrderResult = document.getElementById(
  "alphabeticalOrderResult"
);
alphabeticalOrderResult.style.display = "none";
alphabeticalOrderButton.addEventListener("click", () => {
  alphabeticalOrderResult.style.display = "flex";
  alphabeticalOrderResult.innerHTML = alphabeticalOrder(
    alphabeticalOrderInput.value
  );
});

// sum of numbers
const sum = (num1, num2) => {
  return Number(num1) + Number(num2);
};
const sumButton = document.getElementById("sumButton");
const sumInput1 = document.getElementById("sumInput1");
const sumInput2 = document.getElementById("sumInput2");
const sumResult = document.getElementById("sumResult");
sumResult.style.display = "none";
sumButton.addEventListener("click", () => {
  sumResult.style.display = "flex";
  sumResult.innerHTML = sum(sumInput1.value, sumInput2.value);
});

// calculate age
const calcAge = (age) => {
  return age * 365;
};
const calcAgeButton = document.getElementById("calcAgeButton");
const calcAgeInput = document.getElementById("calcAgeInput");
const calcAgeResult = document.getElementById("calcAgeResult");
calcAgeResult.style.display = "none";
calcAgeButton.addEventListener("click", () => {
  calcAgeResult.style.display = "flex";
  calcAgeResult.innerHTML = calcAge(calcAgeInput.value);
});

// hour to seconds
const hourToSeconds = (hour) => {
  return hour * 3600;
};
const hourToSecondsButton = document.getElementById("hourToSecondsButton");
const hourToSecondsInput = document.getElementById("hourToSecondsInput");
const hourToSecondsResult = document.getElementById("hourToSecondsResult");
hourToSecondsResult.style.display = "none";
hourToSecondsButton.addEventListener("click", () => {
  hourToSecondsResult.style.display = "flex";
  hourToSecondsResult.innerHTML = hourToSeconds(hourToSecondsInput.value);
});

// less than  or equal to zero
const lessThanOrEqualToZero = (num) => {
  return num <= 0;
};
const lessThanOrEqualToZeroButton = document.getElementById(
  "lessThanOrEqualToZeroButton"
);
const lessThanOrEqualToZeroInput = document.getElementById(
  "lessThanOrEqualToZeroInput"
);
const lessThanOrEqualToZeroResult = document.getElementById(
  "lessThanOrEqualToZeroResult"
);
lessThanOrEqualToZeroResult.style.display = "none";
lessThanOrEqualToZeroButton.addEventListener("click", () => {
  lessThanOrEqualToZeroResult.style.display = "flex";
  lessThanOrEqualToZeroResult.innerHTML = lessThanOrEqualToZero(
    lessThanOrEqualToZeroInput.value
  );
});

// find digit amount
const findDigitAmount = (num) => {
  return num.toString().length;
};
const findDigitAmountButton = document.getElementById("findDigitAmountButton");
const findDigitAmountInput = document.getElementById("findDigitAmountInput");
const findDigitAmountResult = document.getElementById("findDigitAmountResult");
findDigitAmountResult.style.display = "none";
findDigitAmountButton.addEventListener("click", () => {
  findDigitAmountResult.style.display = "flex";
  findDigitAmountResult.innerHTML = findDigitAmount(findDigitAmountInput.value);
});

// object to array
const toArray = (obj) => {
  return Object.entries(obj);
};
console.log("=================toArray===================");
console.log(toArray({ a: 1, b: 2 }));
console.log("====================================");

const paths = (n) => {
  if (n === 0) {
    return 1;
  } else {
    return n * paths(n - 1);
  }
};
console.log("=================paths===================");
console.log(paths(4));
console.log("====================================");

const doubleLetters = (str) => {
  for (let x = 0; x < str.length; x++) {
    if (str[x] === str[x + 1]) {
      return true;
    }
  }
  return false;
};
console.log("=================doubleLetters===================");
console.log(doubleLetters("orange"));
console.log("====================================");

const formatDate = (date = new Date()) => {
  const days = date.getDate();
  const months = date.getMonth() + 1;
  const years = date.getFullYear();
  return `${days}/${months}/${years}`;
};
console.log("=================formatDate===================");
console.log(formatDate());
console.log("====================================");

const getDays = (date1, date2) => {
  const diffTime = Math.abs(date2 - date1);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
};
console.log("=================getDays===================");
console.log(getDays(new Date("July 20, 2019"), new Date("July 30, 2019")));
console.log("====================================");

const largerNumber = (num1, num2) => {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
};
console.log("=================largerNumber===================");
console.log(largerNumber(2, 3));
console.log("====================================");

const mostExpensive = (obj) => {
  let max = 0;
  let name = "";
  for (let x in obj) {
    if (obj[x] > max) {
      max = obj[x];
      name = x;
    }
  }
  return `The most expensive one is the ${name}`;
};
console.log("=================mostExpensive===================");
console.log(
  mostExpensive({
    "Silver Bracelet": 280,
    "Gemstone Earrings": 180,
    "Diamond Ring": 3500,
  })
);
console.log("====================================");

const cupSwapping = (arr) => {
  let ball = "B";
  for (let x = 0; x < arr.length; x++) {
    if (arr[x].includes(ball)) {
      ball = arr[x].replace(ball, "");
    }
  }
  return ball;
};
console.log("=================cupSwapping===================");
console.log(cupSwapping(["AC", "CA", "CA", "AC"]));
console.log("====================================");
