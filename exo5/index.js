function isBetween(min, n, max) {
  if (n > min && n < max) {
    return true;
  } else if (n == max && n == min) {
    return "invalid";
  } else {
    return false;
  }
}

console.log(isBetween(4, 4, 4));
