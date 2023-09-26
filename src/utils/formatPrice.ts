const formatPrice = (p: number): string => {
  let result = '';

  let fractionalPart = p - Math.trunc(p);
  fractionalPart = Math.trunc(Math.round(fractionalPart * 100));

  p = Math.trunc(p);

  while (p >= 1000) {
    let currentLastThreeDigits: string | number = p % 1000;
    if (currentLastThreeDigits < 10) {
      currentLastThreeDigits = '00' + currentLastThreeDigits;
    }
    if (currentLastThreeDigits >= 10 && currentLastThreeDigits < 100) {
      currentLastThreeDigits = '0' + currentLastThreeDigits;
    }
    result =
      result === '' ? currentLastThreeDigits + '' : currentLastThreeDigits + ' ' + result;

    p = Math.trunc(p / 1000);
  }

  result = result !== '' ? p + ' ' + result : p + '';
  if (fractionalPart > 0) {
    result += '.' + fractionalPart;
  }

  result += ' ₽';

  return result;
};

export { formatPrice };
