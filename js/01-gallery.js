import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryPlace = document.querySelector(`.gallery`);

const changeGalleryOfImage = galleryItems.map(galleryItem => {
    const changeItemEl = document.createElement(`a`);
    changeItemEl.href = galleryItem.original;
    changeItemEl.classList.add(`gallery__link`);
    const changeImgEl = document.createElement(`img`);
    changeImgEl.classList.add(`gallery__image`);
    changeImgEl.src = galleryItem.preview;
    changeImgEl.alt = galleryItem.description;
    changeImgEl.dataset.source = galleryItem.original;

    changeItemEl.appendChild(changeImgEl);

    return changeItemEl;
});
galleryPlace.append(...changeGalleryOfImage);
galleryPlace.addEventListener(`click`, callModalWindow);

function callModalWindow(event) {
  event.preventDefault();
  if (event.target.nodeName != 'IMG') {
    return;
  }
  // console.log(event.target.dataset.source);
  const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}" alt="${event.target.alt}" width="800">`
  );
  instance.show();

  document.addEventListener('keydown', event => {
    const faidModal = document.querySelector(`div.basicLightbox`);
    if (event.key === 'Escape' && faidModal !== null) {
      instance.close();
    }
  });
}
console.log(galleryItems);
