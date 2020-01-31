var projectsArray = document.getElementsByClassName("project");

for (let i = 0; i < projectsArray.length; i++) {
  projectsArray[i].addEventListener("mouseover", animateMouseOver);
  projectsArray[i].addEventListener("mouseout", animateMouseOut);
}

function animateMouseOver(event) {
  event.target.classList.remove("mouseOutAnim");
  event.target.classList.add("mouseOverAnim");
}

function animateMouseOut(event) {
  event.target.classList.remove("mouseOverAnim");
  event.target.classList.add("mouseOutAnim");
}
