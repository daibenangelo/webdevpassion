function checker() {
  if ($(window).width() == 375) {
    alert("The next clue is: ");
  }
}

setInterval(checker, 50);
