import { galleryItems } from './gallery-items.js';

const galleryPlace = document.querySelector(`.gallery`);
console.log(galleryItems);
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

  var lightbox = new SimpleLightbox('.gallery a', {
    captionsData: `alt`,
    captionDelay: 250,
  });
}

