export const getBrowserInfo = () => {
  const userAgent = navigator.userAgent;

  let browserName;

  const browsersName = {
    'Firefox': 'Mozilla',
    'OPR': 'Opera',
    'Microsoft Edge': 'Edge',
    'Edge': 'Edge',
    'Google Chrome': 'Chrome',
    'Chrome': 'Chrome',
    'Safari': 'Safari',
  }

  const browsers = ['Firefox', 'OPR', 'Microsoft Edge', 'Edge', 'Google Chrome', 'Chrome', 'Safari'];

  for (let browser of browsers) {

    if (userAgent.indexOf(browser) > -1) {
      browserName = browser;
      break;
    }
  }


  return browsersName[browserName];
}