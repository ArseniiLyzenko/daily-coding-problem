/*
 * Given an integer k and a string s, find the length of the longest substring
 * that contains at most k distinct characters.
 *
 * For example, given s = "abcba" and k = 2, the longest substring with k
 * distinct characters is "bcb".
 * */

function funcName(s, k) {
  let substrings = [];
  let tmp = "";

  for (let i = 0, len = s.length; i < len; i++) {
    for (let j = i; j < len; j++) {

      if (tmp.length < k || tmp.includes(s[j])) {
        tmp += s[j];
        if (j === len - 1) {
          addTmpIntoSubstrings(i);
        }
      } else {
        addTmpIntoSubstrings(i);
        break;
      }

    }
  }

  return substrings.sort((a,b) => b.length - a.length)[0];

  function addTmpIntoSubstrings(i) {
    substrings[i] = tmp;
    tmp = "";
  }
}