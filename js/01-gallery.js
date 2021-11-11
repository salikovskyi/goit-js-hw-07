import { galleryItems } from "./gallery-items.js";
// Change code below this line

const GlryEl = document.querySelector(".gallery");



const arr = galleryItems.map(item => {
    return `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`
}).join("");


GlryEl.insertAdjacentHTML("afterbegin", arr)

let openimage;

GlryEl.addEventListener('click', (event) => {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") {
        return;
    }
    openimage = basicLightbox.create(`
 		<img src="${event.target.dataset.source} ">
 	`)
     openimage.show()
 });


console.log(galleryItems);
