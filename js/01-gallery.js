import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);


function renderGallery() {
  const galleryContainer = document.querySelector(".gallery");

galleryItems.forEach((item) => {
  const galleryItem = document.createElement("li");
  galleryItem.classList.add("gallery__item");

  const galleryLink = document.createElement('a');
  galleryLink.classList.add("gallery__link");
  galleryLink.href = "large-image.jpg";

  const image = document.createElement("img");
  image.classList.add('gallery__image');
  image.src = "small-image.jpg";
  image.alt = item.description;
  image.dataset.source = "large-image.jpg";





  galleryItem.appendChild(galleryLink);
  galleryLink.appendChild(image);
  galleryContainer.appendChild(galleryItem);
  // console.log(galleryContainer);
});
}
renderGallery()

const galleryContainer = document.querySelector(".gallery");
galleryContainer.addEventListener('click', (e) => {
  if (e.target.tagName === 'IMG') {
    const src = e.target.src;
    console.log(src)
  }
})