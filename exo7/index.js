function gradeMe(grade) {
  if (grade >= 0.75) {
    return "A2";
  } else if (grade >= 0.66) {
    return "A1";
  } else if (grade >= 0.33) {
    return "EC";
  } else {
    return "NA";
  }
}

console.log(gradeMe(0.75));
