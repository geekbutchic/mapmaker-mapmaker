/******************
 * YOUR CODE HERE *
******************/

function doubleAll(numbers) {
  const doubled = []

  for (let i = 0; i < numbers.length; i++) {
    doubled.push(numbers[i] * 2);
  }
  return doubled;
}

function yelledGreetings(greeting) {
  const yelled = []

  for (let i = 0; i < greeting.length; i++) {
    yelled.push(greeting[i] + '!')
  }
  return yelled;
}

function absoluteValues(numbers) {
  const absolutes = [];

  for (let i = 0; i < numbers.length; i++) {
    absolutes.push(Math.abs(numbers[i]));
  }
  return absolutes;
}

function upperCaseFirstLetters(names) {
  let uppercasedNames = [];

  for (let i = 0; i < names.length; i++) {
    uppercasedNames.push(names[i][0].toUpperCase() + names[i].slice(1).toLowerCase())
  }
  return uppercasedNames;
}

function changeToInitials(names) {
  const initiaList = [];


  for (let i = 0; i < names.length; i++) {
    let initials = '';

    for (let i = 0; i < name.length; i++) {
      if (i === 0 || name[i - 1] === '') {
        initials = initials + name[i].toUpperCase();
      }
    }
    initiaList.push(initials)
  }
  return initiaList;
}

function doubleOdd(numbers) {
  const answers = [];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 1 || numbers[i] % 2 === -1) {
      answers.push(numbers[i] * 2)
    } else {
      answers.push(numbers[i])
    }
  }
  return answers;
}

function add1ToLeft(numbers) {
  const with1Addeds = [];
  for (let i = 0; i < numbers.length; i++) {
    const stringifiedNumber = numbers[i].toString();
    if (numbers[i] < 0) {
      const stringWith1Added = '-1' + stringifiedNumber.slice(i)
      stringWith1Added.push(Number(stringWith1Added));
    } else {
      const stringWith1Added = '1' + stringifiedNumber;
      stringWith1Added.push(Number(stringWith1Added));
    }
  }
  return with1Addeds;
}

  /*******************************************
  * CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
  *           PLEASE DON'T TOUCH!            *
  *******************************************/

  if (typeof doubleAll === 'undefined') {
    doubleAll = undefined;
  }

  if (typeof yelledGreetings === 'undefined') {
    yelledGreetings = undefined;
  }

  if (typeof absoluteValues === 'undefined') {
    absoluteValues = undefined;
  }

  if (typeof upperCaseFirstLetters === 'undefined') {
    upperCaseFirstLetters = undefined;
  }

  if (typeof changeToInitials === 'undefined') {
    changeToInitials = undefined;
  }

  if (typeof doubleOdd === 'undefined') {
    doubleOdd = undefined;
  }

  if (typeof add1ToLeft === 'undefined') {
    add1ToLeft = undefined;
  }


  module.exports = {
    doubleAll,
    yelledGreetings,
    absoluteValues,
    upperCaseFirstLetters,
    changeToInitials,
    doubleOdd,
    add1ToLeft,
  }

