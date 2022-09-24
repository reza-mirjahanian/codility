module.exports = (S) => {
  var opens = 0;
  var closes = 0;

  for (const item of S) {
    if (item === '(') {
      opens++;
    } else if (item === ')') {
      closes++;
    }

    if (opens < closes) {
      return 0;
    }
  }

  if (opens === closes) {
    return 1;
  }

  return 0;
};
