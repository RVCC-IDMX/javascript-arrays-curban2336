/* eslint-disable no-unused-vars */
/*
 * arrays-02.js
 * Language: javascript
 * Test: tests/arrays-02.test.js
 * Path: src/arrays-02.js
 *
 * Description: String methods and immutability.
 *
 * Concepts:
 *  - Strings are immutable; methods return new strings.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
 */

/**
 * Returns the character at the specified index.
 * @param {string} str - The string.
 * @param {number} indx - The index.
 * @returns {string} The character at that index.
 */
function findTheCharacterAtIndex(str, indx) {
  return str.charAt(indx);
  // HINT: Use the charAt() method.
}

/**
 * Returns a slice of the string from start index up to, but not including, the end index.
 * @param {string} str - The string.
 * @param {number} start - The start index.
 * @param {number} end - The end index.
 * @returns {string} The sliced string.
 */
function sliceTheString(str, start, end) {
  return str.slice(start, end);
}

/**
 * Splits a string into an array of substrings based on the given separator.
 * @param {string} str - The string.
 * @param {string} separator - The separator.
 * @returns {Array} An array of substrings.
 */
function splitTheString(str, separator) {
  return str.split(separator);
}

/**
 * Converts the entire string to uppercase.
 * @param {string} str - The string.
 * @returns {string} The uppercase string.
 */
function makeAllUpperCase(str) {
  return str.toUpperCase();
}

/**
 * Converts the entire string to lowercase.
 * @param {string} str - The string.
 * @returns {string} The lowercase string.
 */
function makeAllLowerCase(str) {
  return str.toLowerCase();
}

/**
 * Converts a single word to title case.
 * @param {string} word - A single word.
 * @returns {string} The word in title case.
 */
function makeWordTitleCase(word) {
  word = word.toUpperCase();
  let titleChar = findTheCharacterAtIndex(word, 0);
  word = word.toLowerCase();
  word = titleChar + sliceTheString(word, 1, word.length);
  return word;
  // HINT: Capitalize the first letter and lowercase the rest.
}

/**
 * Replaces all occurrences of oldStr with newStr in a string.
 * @param {string} str - The original string.
 * @param {string} oldStr - The substring to be replaced.
 * @param {string} newStr - The replacement string.
 * @returns {string} The modified string.
 */
function replaceTheString(str, oldStr, newStr) {
  return str.replaceAll(oldStr, newStr);
  // HINT: Try using the split() method, then join.
}

/**
 * Converts a sentence so that each word's first letter is capitalized.
 * @param {string} sentence - The sentence.
 * @returns {string} The title-cased sentence.
 */
function makeSentenceTitleCase(sentence) {
  let words = splitTheString(sentence, " ");
  let index = 0;
  while (index < words.length) {
    sentence = replaceTheString(sentence, words[index], makeWordTitleCase(words[index]));
    ++index;
  }
  return sentence;
  // HINT: Split the sentence into words, transform each word, then join them back.
}

module.exports = {
  findTheCharacterAtIndex,
  sliceTheString,
  splitTheString,
  makeAllUpperCase,
  makeAllLowerCase,
  makeWordTitleCase,
  replaceTheString,
  makeSentenceTitleCase,
};