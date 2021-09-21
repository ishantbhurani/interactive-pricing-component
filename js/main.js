const root = document.documentElement;
const pageviewsSlider = document.getElementById("pageviews-slider");
const planDetails = document.querySelector(".plan-details");

const priceArray = [
  { pageviews: "10k", price: "$8.00" },
  { pageviews: "50k", price: "$12.00" },
  { pageviews: "100k", price: "$16.00" },
  { pageviews: "500k", price: "$24.00" },
  { pageviews: "1M", price: "$36.00" },
];

function updateSlider(value) {
  root.style.setProperty("--slider-value", value + "%");

  let priceArrayItem = priceArray[0];
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

  planDetails.innerHTML = `
    <p class="pageviews">${priceArrayItem.pageviews} pageviews</p>
    <p class="price"><span>${priceArrayItem.price}</span> / month</p>
  `;
}

pageviewsSlider.oninput = (e) => updateSlider(e.target.value);
