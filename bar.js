// get page element
const postWrap = document.querySelector(".post-wrap");

// create div for reading bar
let bar = document.createElement("div");

// stylesheet for reading bar
bar.style.height = "4px";
bar.style.width = "0";
bar.style.backgroundColor = "black";
bar.style.position = "fixed";
bar.style.top = "0";
bar.style.left = "0";
bar.style.zIndex = "9999";
bar.style.transition = "0.2s";

// add reading bar to the DOM
document.body.append(bar);

function updateBar() {
  // console.log(postWrap.offsetHeight) to get the element height
  const textHeight = postWrap.offsetHeight;
  // console.log(window.pageYOffset) verify what position in the DOM the screen are
  const pagePosition = window.pageYOffset;
  // calcute bar size x element page Y height
  const updatedBar = pagePosition * 100 / textHeight;
  // convert the result to the bar size
  bar.style.width = updatedBar + "%";
}

// bar logic using scrolling
window.addEventListener('load', () => {
  document.addEventListener("scroll", updateBar)
});
