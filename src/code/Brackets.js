// A string S consisting of N characters is considered to be properly nested if any of the following conditions is true:
//
// S is empty;
// S has the form "(U)" or "[U]" or "{U}" where U is a properly nested string;
// S has the form "VW" where V and W are properly nested strings.
//     For example, the string "{[()()]}" is properly nested but "([)()]" is not.

module.exports = (S) => {
  let buffer = [];
  let opens = '([{';
  let closes = ')]}';

  for (const item of S) {
    if (opens.indexOf(item) > -1) {
      buffer.push(item);
      continue;
    }
    if (!buffer.length) {
      return 0;
    }
    if (closes.indexOf(item) !== opens.indexOf(buffer.pop())) {
      return 0;
    }
  }

  if (!buffer.length) {
    return 1;
  }

  return 0;
};
