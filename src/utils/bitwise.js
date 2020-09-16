const decimalToBinary = (num, str) => {
    if (num <= 1) return (String(num) + str);
    return decimalToBinary(Math.floor(num / 2), (String(num % 2) + str));
}