const decimalToBinary = (num, str) => {
    if (num <= 1) return (String(num) + str);
    return decimalToBinary(Math.floor(num / 2), (String(num % 2) + str));
}

const or = (str1, str2) => {
    const maxLength = (str1.length > str2.length) ? str1.length : str2.length;
    let t1Str1 = str1.padStart(maxLength, '0');
    let t2Str2 = str2.padStart(maxLength, '0');
    let a0 = '';
    for (let i = 0; i < maxLength; i += 1) {
        if (t1Str1[i] === '1' || t2Str2[i] === '1') {
            a0 += '1'
        } else {
            a0 += '0'
        }
    }
    return a0;
}