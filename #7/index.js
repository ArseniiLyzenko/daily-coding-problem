/*
 * Given the mapping a = 1, b = 2, ... z = 26, and an encoded message, count the
 * number of ways it can be decoded.
 *
 * For example, the message '111' would give 3, since it could be decoded as 'aaa',
 * 'ka', and 'ak'.
 *
 * You can assume that the messages are decodable. For example, '001' is not
 * allowed.
 */

/*
 * HOW ALGORITHM WORKS:
 *
 * Let's assume input: "11281120111"
 *
 * Split the input on sections, looking at each pair of adjacent digits.
 * Keep in mind two conditions:
 *   1) dictionary starts at 1 and ends at 26
 *   2) all pairs of digits can be decoded in two ways, except "10" and "20",
 *      they can be decoded only in one way each because there is no 0 in
 *      dictionary.
 *
 * Splitting:
 *
 *   112|811201121     because 28 > 26
 *   112|8|1120121     because 81 > 26
 *   112|8|11|20|1121  because 10 and 20 can encrypt only one letter
 *
 * Then we have to find numbers of ways each section can be decoded.
 * A number of ways depends on length of a section (except sections that
 * consist of 10 or 20, again, they can be decrypted only in one way).
 *
 *  112|8|11|20|1121 → 3|1|2|1|4
 *
 * Then use length of each section as index of Fibonacci array, to find out
 * numbers of ways each section can be decrypted.
 *
 *   3|1|2|1|4 → 3|1|2|1|5
 *
 * And to find out how many ways has the entire input just multiply:
 *
 *   3|1|2|1|5 → 3 * 1 * 2 * 1 * 5 = 30
 *
 * So, 11281120111 can be decoded in 30 ways.
 * */

function funcName(cipher = "") {
  if (cipher === "") return 0;
  cipher = String(cipher);

  let sections = [];
  let section = cipher[0];// push first item since loop starts from 1

  for (let i = 1, len = cipher.length; i < len; i++) {
    if (cipher[i - 1] + cipher[i] < 27 && cipher[i] != 0) {

      section += cipher[i];

    } else if (cipher[i] == 0) {// if 10 or 20 encountered

      sections.push(section.slice(0, -1));
      section = "";

    } else {

      sections.push(section);
      section = "";
      section += cipher[i];

    }
  }

  sections.push(section);// push last section

  return sections
    .filter(item => item)// filter empty sections
    .map(section => fibonacci(section.length + 1))
    .reduce((acc, item) => acc * item);
}

function fibonacci(fibArrIndex) {
  let mem = [];
  return fibonacciHelper(fibArrIndex, mem);
}

/*
 * 'mem' is needed to accelerate performance,
 * because pure recursive is slow for large inputs (i.e > 40)
 * */
function fibonacciHelper(fibArrIndex, mem) {
  if (fibArrIndex === 0)
    return 0;

  if (fibArrIndex === 1 || fibArrIndex === 2)
    return 1;

  if (mem[fibArrIndex])
    return mem[fibArrIndex];

  return mem[fibArrIndex] =
    fibonacciHelper(fibArrIndex - 1, mem) + fibonacciHelper(fibArrIndex - 2, mem);
}

function encrypt(msg) {
  return msg
    .toString()
    .split("")
    .map(char => dictionary[char])
    .join("");
}

const dictionary = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
  i: 9,
  j: 10,
  k: 11,
  l: 12,
  m: 13,
  n: 14,
  o: 15,
  p: 16,
  q: 17,
  r: 18,
  s: 19,
  t: 20,
  u: 21,
  v: 22,
  w: 23,
  x: 24,
  y: 25,
  z: 26
};
