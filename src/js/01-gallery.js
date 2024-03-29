import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
const gallery = document.querySelector('.gallery');

const galleryEL = galleryItems
  .map(
    ({
      preview,
      original,
      description,
    }) => `<a class="gallery__item " href="${original}">
  <img class="gallery__image " src="${preview}" alt="${description}" />
</a>`
  )
  .join('');

gallery.insertAdjacentHTML('beforeend', galleryEL);

const lightbox = new SimpleLightbox('.gallery .gallery__item', {
  captionsData: 'alt',
  captionsDelay: 250,
});
