// import { downloadAnimate } from "../../common/animate/download/download";
import { isSale, getPeriodPaymount, getOldAmount } from "../../common/card/card";

export const cardTemplate = ({
    amount,
    amount_html,
    license_name,
    is_best,
    price_key,
    name_prod,
    link
  }) => {
    const periodPaymont = getPeriodPaymount(license_name);

    return `<div  class="card">
            <div class="card-price-container">
              <p class="price">
                <span>$${amount}</span>
                /${periodPaymont}
              </p>
              <p class="old-price">
                <strike>${getOldAmount(amount_html)}</strike>
              </p>

              ${
                is_best 
                ? `<div class="best-value">
                    <p>Best value</p>
                  </div>`
                : ''
              }
              ${isSale(price_key)
                ? `<div class="sale-container">
                    <img src="./assets/Group.png" alt="sale" class="image-sale">
                    <p>50%</p>
                  </div>`
                : ''
              }
              
            </div>
            <div class="card-description-container">
              <p class="name">
                ${name_prod}
                <span>${license_name}</span>
              </p>
                <a class="button-download" href="${link}">
                  Download
                  <img src="./assets/Download.svg" alt="Download"/>
                </a>
            </div>
          </div>`
}
