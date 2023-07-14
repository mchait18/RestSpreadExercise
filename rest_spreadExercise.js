const filterOutOdds = (...args) => args.filter((num) => num % 2 === 0);

const findMin = (...nums) => Math.min(...nums);

const mergeObjects = (objOne, objTwo) => ({ ...objOne, ...objTwo });

const doubleAndReturnArgs = (arr, ...args) => [
  ...arr,
  ...args.map((val) => val * 2),
];


const removeRandom = (items) => {
  const newArr = [...items];
  const idx = Math.floor(Math.Random() * items.length);
  return newArr.filter((item) => item !== items[idx]);
};

const extend = (array1, array2) => [...array1, ...array2];

const addKeyVal = (obj, key, val) => {
  const newObj = { ...obj };
  newObj[key] = val;
  return newObj;
};

const removeKey = (obj, key) => {
  const newObj = { ...obj };
  delete newObj[key];
  return newObj;
};

const combine = (obj1, obj2) => ({ ...obj1, ...obj2 });

const update = (obj, key, val) => {
  const newObj = { ...obj };
  newObj[key] = val;
  return newObj;
};
