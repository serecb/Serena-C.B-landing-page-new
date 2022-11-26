function showCarousel() {
  let projectGallery = document.querySelector("#carouselExampleControls");
  let h3Element = document.querySelector("h3");
  let homepageButton = document.querySelector("#homepage-button");
  let homepageBackground = document.querySelector("#milky-way");
  let homepageHeading = document.querySelector("#homepage-heading");

  if (projectGallery.style.display === "none") {
    projectGallery.style.display = "block";
    projectGallery.style.width = "80%";
    projectGallery.style.border = "5px solid #ecc5be";
    projectGallery.style.borderRadius = "40px";
    projectGallery.style.marginTop = "20px";
    projectGallery.style.marginBottom = "10px";
    projectGallery.style.opacity = "0.8";

    homepageHeading.style.backgroundImage = "url(images/script-background.jpg)";
    homepageHeading.style.backgroundRepeat = "no-repeat";
    homepageHeading.style.backgroundSize = "cover";

    homepageHeading.style.color = "#495f76";
    h3Element.style.display = "none";
    carouselButton.style.display = "none";
    homepageBackground.style.display = "none";
    homepageButton.style.display = "block";
  } else {
    projectGallery.style.display = "none";
  }
}
showCarousel();
function showMainScreen() {
  let projectGallery = document.querySelector("#carouselExampleControls");
  let homepageButton = document.querySelector("#homepage-button");
  let h3Element = document.querySelector("h3");
  let carouselButton = document.querySelector("#carousel-button");
  let homepageHeading = document.querySelector("#homepage-heading");
  if (projectGallery.style.display === "block") {
    projectGallery.style.display = "none";
    homepageButton.style.display = "none";
    document.body.style.backgroundImage = "url(images/milky-way.jpg)";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    document.body.style.width = "100%";
    h3Element.style.display = "block";
    carouselButton.style.display = "block";
    homepageHeading.style.background = "#ecc5be";
  }
}
function moveItem() {
  let aboutMeLink = document.querySelector(".navbar-brand");
  aboutMeLink.style.marginLeft = "-10px";
}
