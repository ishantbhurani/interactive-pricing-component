const root = document.documentElement;
const pageviewsSlider = document.getElementById("pageviews-slider");

function updateSlider(value) {
  root.style.setProperty("--slider-value", value + "%");
}

pageviewsSlider.oninput = (e) => updateSlider(e.target.value);
