import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer =
 document.querySelector(".gallery");

const createRenderGallery =
 renderGallery(galleryItems);

galleryContainer.insertAdjacentHTML(
 "beforeend",
 createRenderGallery
);

function renderGallery(galleryItems) {
 return galleryItems
  .map(({ preview, original, description }) => {
   return `<li class='gallery__item'>
      <a class='gallery__link' href='${original.value}'>
      <img
        class='gallery__image'
        src='${preview}'
        data-source='${original}'
        alt='${description}'/>
      </a>
      </li>`;
  })
  .join("");
}
// galleryContainer.addEventListener(
//  "click",
//  (e) => {
//   e.preventDefault();
//   if (e.target.tagName === "IMG") {
//    const source = e.target.dataset.source;
//    const instance = basicLightbox.create(`
//     <img src="${source}" width="800" height="600">
// `);

//    instance.show();
//   }
//  }
// );

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  caption: true,
  captionPosition:	'bottom',
  captionDelay: 250,
});
