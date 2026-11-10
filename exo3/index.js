function max3(a, b, c) {
  if (a > b && a > c) {
    return `${a} est le plus grand nombre.`;
  } else if (b > c && b > a) {
    return `${b} est le plus grand nombre.`;
  } else if (c > b && c > a) {
    return `${c} est le plus grand nombre.`;
  }
  return "Les 3 nombres sont égaux.";
}

console.log(max3(3, 3, 3));
