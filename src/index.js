/**
 * Returns true if we have a prime variable , in other case false
 * The primes are of the form 6k +- 1 with exception of 2 and 3.
 * So, we can check if variable is divisible by 2 or 3 and after that, check through all the variableers of form 6k +- 1
 * @param {Number} variable - number to evalulate
 * @return {bool}
 */

export function isPrimeNumber(variable) {
  if (variable <= 1) {
    return false;
  }
  if (variable <= 3) {
    return true;
  }
  if (variable % 2 === 0 || variable % 3 === 0) {
    return false;
  }
  for (let i = 5; i <= Math.sqrt(variable); i + 6) {
    if (variable % i === 0 || variable % (i + 2) === 0 ) {
      return false;
    }
  }

  /*
  for(let i = 2; i * i <= variable; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
  */
}