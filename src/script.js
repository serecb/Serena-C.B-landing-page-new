function showCarousel() {
  let projectGallery = document.querySelector("#carouselExampleFade");
  let h3Element = document.querySelector("h3");
  let carouselButton = document.querySelector("#carousel-button");
  let homepageBackground = document.querySelector("#milky-way");
  let homepageHeading = document.querySelector("#homepage-heading");
  let backToMainScreenButton = document.querySelector(
    "#back-to-main-screen-button"
  );

  if (projectGallery.style.display === "none") {
    projectGallery.style.display = "block";
    projectGallery.style.width = "40%";
    projectGallery.style.marginTop = "250px";
    projectGallery.style.marginBottom = "10px";
    projectGallery.style.opacity = "0.8";
    document.body.style.background = "#ECC5BE";
    homepageHeading.style.backgroundImage = "url(images/script-background.jpg)";
    homepageHeading.style.backgroundRepeat = "no-repeat";
    homepageHeading.style.backgroundSize = "cover";
    homepageHeading.style.color = "#495f76";
    h3Element.style.display = "none";
    carouselButton.style.display = "none";
    homepageBackground.style.display = "none";
    backToMainScreenButton.style.display = "block";
  } else {
    projectGallery.style.display = "none";
  }
}

function showMainScreen() {
  let projectGallery = document.querySelector("#carouselExampleFade");
  let backToMainScreenButton = document.querySelector(
    "#back-to-main-screen-button"
  );
  let h3Element = document.querySelector("h3");
  let carouselButton = document.querySelector("#carousel-button");
  let homepageHeading = document.querySelector("#homepage-heading");
  if (projectGallery.style.display === "block") {
    projectGallery.style.display = "none";
    backToMainScreenButton.style.display = "none";
    document.body.style.backgroundImage = "url(images/milky-way.jpg)";
    h3Element.style.display = "block";
    carouselButton.style.display = "block";
    homepageHeading.style.background = "#ecc5be";
  }
}
