function rankUpElo(level, isWin) {
  if (isWin == true) {
    return level + level * 0.2;
  } else {
    return level - level * 0.25;
  }
}

console.log(rankUpElo(10, false));
