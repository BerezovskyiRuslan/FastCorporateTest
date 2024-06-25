export const productTemplate = (cards) => {
  return `<div class="content-container">
            <h2 class="content-header">thank you for choosing our product!</h2>
            <div class="cards-container">
              ${!cards ? '' : cards}
            </div>
          </div>`;
}