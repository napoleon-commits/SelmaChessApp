export const decimalToBinary = (num, str) => {
  if (num <= 1) return (String(num) + str);
  return decimalToBinary(Math.floor(num / 2), (String(num % 2) + str));
};

export const or = (str1, str2) => {
  const maxLength = (str1.length > str2.length) ? str1.length : str2.length;
  const t1Str1 = str1.padStart(maxLength, '0');
  const t2Str2 = str2.padStart(maxLength, '0');
  let a0 = '';
  for (let i = 0; i < maxLength; i += 1) {
    if (t1Str1[i] === '1' || t2Str2[i] === '1') {
      a0 += '1';
    } else {
      a0 += '0';
    }
  }
  return a0;
};

export const binaryToDecimal = (str) => {
  let a0 = 0;
  for (let i = str.length - 1; i >= 0; i -= 1) {
    a0 += (Number(str[i]) * (2 ** (str.length - i - 1)));
  }
  return a0;
};

export const and = (str1, str2) => {
  const maxLength = (str1.length > str2.length) ? str1.length : str2.length;
  const t1Str1 = str1.padStart(maxLength, '0');
  const t2Str2 = str2.padStart(maxLength, '0');
  let a0 = '';
  for (let i = 0; i < maxLength; i += 1) {
    if (t1Str1[i] === '1' && t2Str2[i] === '1') {
      a0 += '1';
    } else {
      a0 += '0';
    }
  }
  return a0;
};
