/**
 * Returns a very important number
 * @return {number}
 */

/**
 * The primes are of the form 6k +- 1 with exception of 2 and 3.
 * So, we can check if number is divisible by 2 or 3 and after that, check through all the mnumbers of form 6k +- 1
 */

export function myModule(numb) {
  if (numb <= 1) {
    return false;
  }
  if (numb <= 3) {
    return true;
  }
  if (numb % 2 === 0 || numb % 3 === 0) {
    return false;
  }
  for (let i = 5; i * i <= numb; i + 6) {
    if (numb % i === 0 || numb % (i + 2) === 0 ) {
      return false;
    }
  }

  /*
  for(let i = 2; i * i <= numb; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
  */
}
