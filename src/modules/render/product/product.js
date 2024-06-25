import { productTemplate } from "../../template/product/product.template";

export const productRender = (cards, container) => {

  const getProductTemplate = productTemplate(cards);

  if (!container) {
    return getProductTemplate;
  }

  container.innerHTML = getProductTemplate;
  
  
}
