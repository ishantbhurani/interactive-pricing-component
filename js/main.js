const root = document.documentElement;
const pageviewsSlider = document.getElementById("pageviews-slider");
const planDetails = document.querySelector(".plan-details");
const cbYearlyBilling = document.getElementById("yearly-billing");

const priceArray = [
  { pageviews: "10k", price: "$8.00" },
  { pageviews: "50k", price: "$12.00" },
  { pageviews: "100k", price: "$16.00" },
  { pageviews: "500k", price: "$24.00" },
  { pageviews: "1M", price: "$36.00" },
];

let hasYearlyBilling = cbYearlyBilling.checked;
let priceArrayItem = priceArray[2];

function updatePrice() {
  let price = Number(priceArrayItem.price.slice(1));
  price = (hasYearlyBilling ? price - (price * 25) / 100 : price).toFixed(2);

  planDetails.innerHTML = `
    <p class="pageviews">${priceArrayItem.pageviews} pageviews</p>
    <p class="price"><span>$${price}</span> / month</p>
  `;
}

function updateSlider(value) {
  root.style.setProperty("--slider-value", value + "%");

  switch (value) {
    case "25":
      priceArrayItem = priceArray[1];
      break;
    case "50":
      priceArrayItem = priceArray[2];
      break;
    case "75":
      priceArrayItem = priceArray[3];
      break;
    case "100":
      priceArrayItem = priceArray[4];
      break;
    default:
      priceArrayItem = priceArray[0];
  }

  updatePrice();
}

pageviewsSlider.oninput = (e) => updateSlider(e.target.value);

cbYearlyBilling.addEventListener("change", function () {
  hasYearlyBilling = this.checked;
  updatePrice();
});
