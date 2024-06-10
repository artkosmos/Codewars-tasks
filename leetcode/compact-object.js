/*
Given an object or array obj, return a compact object.

A compact object is the same as the original object, except with keys containing falsy values removed.
This operation applies to the object and any nested objects. Arrays are considered objects where the indices are keys.
A value is considered falsy when Boolean(value) returns false.
*/

/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
const compactObject = function (obj) {
  if (obj === null) return null
  if (Array.isArray(obj)) {
    return obj
      .map(item => typeof item === 'object' ? compactObject(item) : item)
      .filter(Boolean)
  } else if (typeof obj === 'object') {
    return Object.keys(obj).reduce((acc, key) => {
      const value = obj[key];
      if (value && typeof value === 'object') {
        acc[key] = compactObject(value);
      } else if (Boolean(value)) {
        acc[key] = value;
      }
      return acc;
    }, {});
  } else {
    return obj
  }
};
console.log(compactObject({"a": null, "b": [false, 1]}))