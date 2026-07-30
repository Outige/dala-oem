const mainImage = document.querySelector("#mainProductImage");
const thumbnails = Array.from(document.querySelectorAll(".gallery-thumbnail"));

thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener("click", () => {
    const image = thumbnail.querySelector("img");

    mainImage.src = image.currentSrc || image.src;
    mainImage.alt = thumbnail.getAttribute("aria-label").replace(/^Show /, "");

    thumbnails.forEach((item) => {
      item.classList.remove("is-selected");
      item.removeAttribute("aria-current");
    });

    thumbnail.classList.add("is-selected");
    thumbnail.setAttribute("aria-current", "true");
  });
});
