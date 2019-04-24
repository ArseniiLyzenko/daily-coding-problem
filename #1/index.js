
/* Given a list of numbers and a number k,
 * return whether any two numbers from the
 * list add up to k.
 *
 * For example, given [10, 15, 3, 7] and k
 * of 17, return true since 10 + 7 is 17.
 *
 * Bonus: Can you do this in one pass?
 * */

function isThereSubsum(sumOfTwo, numbers) {
  let differences = new Set();

  for (let num of numbers) {
    if (differences.has(num)) return true;

    /* Adding to the set must go after the checking,
     * to handle inputs like isThereSubsum(10, [5])
     * */
    differences.add(sumOfTwo - num);
  }

  return false;
}
