/**
 * Returns a very important numberer
 * @return {numberer}
 */

/**
 * The primes are of the form 6k +- 1 with exception of 2 and 3.
 * So, we can check if numberer is divisible by 2 or 3 and after that, check through all the mnumberers of form 6k +- 1
 */

export function isPrimenumberer(number) {
  if (number <= 1) {
    return false;
  }
  if (number <= 3) {
    return true;
  }
  if (number % 2 === 0 || number % 3 === 0) {
    return false;
  }
  for (let i = 5; i * i <= number; i + 6) {
    if (number % i === 0 || number % (i + 2) === 0 ) {
      return false;
    }
  }

  /*
  for(let i = 2; i * i <= number; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
  */
}
