function dateToSeconds(days, hours, minutes, seconds) {
  let day = days * 86400;
  let hour = hours * 3600;
  let minute = minutes * 60;
  return day + hour + minute + seconds;
}

console.log(dateToSeconds(1, 68, 2, 87)); // 3782
