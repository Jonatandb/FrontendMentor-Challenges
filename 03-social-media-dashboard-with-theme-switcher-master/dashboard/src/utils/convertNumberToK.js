/**
 * Converts a number to a string with 'k' suffix if it is greater than 10,000.
 * @param {number} number The number to convert.
 * @returns {string} A string representing the converted number.
 */
export const convertNumberToK = (number) => {
  if (number > 10000) {
    return `${number / 1000}k`
  }
  return `${number}`
}
