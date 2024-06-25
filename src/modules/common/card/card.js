export const isSale = (str) => {
  if (!str) return false;

  return /\d+%/gi.test(str);
} 

export const getOldAmount = (str) => {
  if (!str) return '';

  const result = str.match(/\$\d+.\d+/gi);

  return !result ? '' : result[0];
}

export const getPeriodPaymount = (str) => {
  const period = {
    year: 'per year',
    monthly: 'mo',
    daily: 'per daily',
  };

  if (!str) return '';

  const getPeriod = str.match(/Year|Monthly|Daily/gi)[0]

  const result = period[getPeriod.toLowerCase()];

  return result;
}