function isUsernameValid(username) {
  if (username.length >= 4 && username != "root" && username[0] !== " ") {
    return true;
  } else {
    return false;
  }
}

console.log(isUsernameValid("ekat"));
