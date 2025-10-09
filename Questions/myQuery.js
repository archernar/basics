function dq(sz) {
    return "\"" + sz + "\"";
}
function sq(sz) {
    return "\'" + sz + "\'";
}
function adq(sz) {
    return "\"";
}
function asq(sz) {
    return "\'";
}


function createElementWithClasss(e, c) {
        var ele=document.createElement(e);
        ele.classList.add(c);
        return ele;
}
function createElementWithClassAndTextNode(e, c) {
        var ele=document.createElement(e);
        ele.classList.add(c);
        return ele;
}

function swapClass(ele,oldclass,newclass) {
    const p=ele.cloneNode(true);
    p.classList.remove(oldclass);
    p.classList.add(newclass);
    return p;
}
function setWidthClass(p, c) {
    p.classList.remove("width12");
    p.classList.remove("width33");
    p.classList.remove("width25");
    p.classList.remove("width40");
    p.classList.remove("width50");
    p.classList.remove("width75");
    p.classList.remove("width91");
    p.classList.remove("width100");
    p.classList.add(c);
}


function setClasses() {
    for (let i = 1; i < arguments.length; i++) {
        arguments[0].classList.add(arguments[i]);
    }
}
function unsetClasses() {
    for (let i = 1; i < arguments.length; i++) {
        arguments[0].classList.remove(arguments[i]);
    }
}

function getRandomIntExclusive(N) {
  return Math.floor(Math.random() * N);
}

function getRandomInt(min,max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getTrByIndex(id, n) {
    const myTable = document.getElementById(id);
    const trs = myTable.querySelectorAll('tr');
    return trs[n];
}
function getRandomTrById(id) {
    var xxxx;
    const myTable = document.getElementById(id);
    const trs = myTable.querySelectorAll('tr');
    if (trs.length === 0) {
        console.warn("No TRs found");
        return;
    }
    var randomIndex = 0;
    while (randomIndex == 0) 
        randomIndex = Math.floor(Math.random() * trs.length);


    if (randomIndex == 0)
        xxxx=0;

    return trs[randomIndex];
}
/**
 * Generates an array of N unique random numbers, from 0 to S-1.
 * This function uses a variant of the Fisher-Yates shuffle algorithm for efficiency.
 * It avoids the performance pitfalls of repeatedly generating random numbers until a unique one is found.
 *
 * @param {number} n The desired number of unique random numbers in the output array.
 * @param {number} s The upper bound of the range for random numbers (exclusive, i.e., from 0 to s-1).
 * @returns {number[]} An array containing N unique random numbers.
 * @throws {Error} If N is greater than S, as it's impossible to generate more unique numbers than the range size.
 */
function generateUniqueRandomNumbers(n, s) {
  // Input validation: N cannot be larger than S.
  if (n > s) {
    return [];
  }

  // Create an array representing the pool of all possible numbers from 0 to S-1.
  const allNumbers = Array.from({ length: s }, (_, i) => i);

  const result = [];
  let remainingSize = s;

  // Draw N numbers from the pool.
  for (let i = 0; i < n; i++) {
    // 1. Pick a random index from the "remaining" part of the array.
    const randomIndex = Math.floor(Math.random() * remainingSize);

    // 2. Add the number at that random index to our result array.
    result.push(allNumbers[randomIndex]);

    // 3. To ensure we don't pick this number again, we swap it with the
    //    last element of the "remaining" part of the array.
    //    This is much more performant than using methods like splice().
    allNumbers[randomIndex] = allNumbers[remainingSize - 1];

    // 4. We then decrement the size of the "remaining" pool.
    remainingSize--;
  }

  return result;
}
function cloneTableWithoutFirstRow(id) {
 // 1. Select the original table element
    const originalTable = document.getElementById(id);
    const clonedTable = originalTable.cloneNode(true);
    const firstRow = clonedTable.querySelector('tr');
    if (firstRow) {
        firstRow.remove();
    }
    return clonedTable;
}
