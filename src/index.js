import './index.html';
import './modules/common/styles/styles';
import * as images from './modules/common/images/images';

import { productRender } from './modules/render/product/product';
import { getCartApi } from './modules/api/cards/getCardsByApi';
import { loadingRender } from './modules/render/loading/loading';
import { cardRender } from './modules/render/card/card';
import { setupDownloadAnimate } from './modules/common/animate/download/download';
import { notFound } from './modules/template/errors';


const getDataAndRenderElements = async () => {
  const mainElement = document.getElementById('main');  

  try {
    setupDownloadAnimate();

    loadingRender(mainElement);

    setTimeout(() => {}, 1000); 


    const productData = await getCartApi();

    const cards = cardRender(productData.result.elements);

    await productRender(cards, mainElement);
  } catch (e) {
    const mainElement = document.getElementById('main');

    mainElement.innerHTML = notFound();

  } 
}


getDataAndRenderElements();