import { getBrowserInfo } from "../../browser/getBrowser";

export const  setupDownloadAnimate = () => {

  const observer = new MutationObserver((mutationsList) => {
    for(let mutation of mutationsList) {
      if (mutation.type === 'childList') {
        setEventListenerOnDownloadButton();
      }
    }
  })

  const config = { childList: true, subtree: true };

  observer.observe(document.body, config);
}

const setEventListenerOnDownloadButton = () => {
  const buttonLinkDownload = document.getElementsByClassName('button-download');
 
  for (let buttonLink of buttonLinkDownload) {
    buttonLink.addEventListener('click',downloadAnimate);
  }
}

const browsersAnimateClass = {
  chrome: ['animated-firefox', 'download-position-firefox', 'download-firefox'],
  mozilla: ['animated-firefox', 'download-position-firefox', 'download-firefox'],
  safari: ['animated-chrome', 'download-position-chrome', 'download-chrome'],
  opera: ['animated-firefox', 'download-position-firefox', 'download-firefox'],
  edge: ['animated-firefox', 'download-position-firefox', 'download-firefox'],
}


const downloadAnimate = () => {
  const download = document.getElementById('download');

  const browserInfo = getBrowserInfo().toLowerCase() || 'chrome';

  const browserAnimateClass = browsersAnimateClass[browserInfo];
  
  download.classList.add(...browserAnimateClass);

  setTimeout(() => {
    download.classList.remove(...browserAnimateClass);
  }, 3000);
}

