/**
 * Sum value in object by key
 * @param {object} obj
 * @param {string} key
 * @returns {number}
 */
obj = { a: 3, b: 2, c: 1 };

function totalValue(obj) {
  let sum = 0;
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      sum += obj[key];
    }
  }

  return sum;
}

function assignObject(defaultObj, targetObj) {
  //   return (targetObj = { ...defaultObj });
  return (targetObj = Object.assign({}, defaultObj));
}

// console.log(totalValue(obj));

const obj1 = { a: 3, b: 2, c: 1 };
const obj2 = { a: 3, b: 2, c: 2 };

console.log(assignObject(obj1, obj2));
