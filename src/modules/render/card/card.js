import { getCartApi } from "../../api/cards/getCardsByApi";
import { cardTemplate } from "../../template/card/card.template";
import { notFound } from "../../template/errors";

export const cardRender = (cards, container) => { 
    let result = ``;

    for (let card of cards) {
      result += cardTemplate(card)
    }

    if (!container) {
      return result;
    }

    container.innerHTML = result;

}