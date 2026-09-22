// Find an Element in an Array Using Linear Search 

function linearSearch(arr, el) {
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === el) {
      console.log(`Found ${el} at index ${i}`);
      return;
    }
  }
  console.log(`${el} does not exit in the given array.`);
}

linearSearch([4, 2, 7, 1, 9], 9);


// Find the First Occurrence of an Element 

function linearSearchFirst(arr, el) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === el) {
      return i;
    }
  }
  return -1;
}

console.log(linearSearchFirst([4, 2, 7, 1, 9], 8)); 



// Find the Last Occurrence of an Element 

function linearSearchLast(arr, el) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (el === arr[i]) {
      return i;
    }
  }
  return -1;
}

console.log(linearSearchLast([4, 3, 3, 1, 3, 1, 3], 3));


// Count How Many Times an Element Appears 

function linearSearchCount(arr, el) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === el) {
      count++;
    }
  }
  return { count };
}

console.log(linearSearchCount([4, 3, 3, 1, 3, 1, 3], 4)); 


// Find All Indexes Where the Element Appears 


function linearSearchAllIndexes(arr, el) {
  const foundIndexes = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === el) {
      foundIndexes.push(i);
    }
  }
  return foundIndexes;
}

console.log(linearSearchAllIndexes([4, 3, 3, 1, 3, 1, 3], 1)); 

//  Linear Search in Array of Objects 

function linearSearchObject(arr, searchId) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].id === searchId) {
      return arr[i];
    }
  }
  return null;
}

console.log(
  linearSearchObject(
    [
      { id: 1, name: "A" },
      { id: 2, name: "B" },
      { id: 3, name: "C" },
    ],
    3
  )
);