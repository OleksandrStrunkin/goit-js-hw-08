// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);


const pallet = document.querySelector(`.gallery`);
const boxMarkup = createImgBox(galleryItems);

pallet.insertAdjacentHTML('beforeend', boxMarkup)

function createImgBox(boxes) {
    return boxes.map(({ preview, original, description }) => {
        return  `<a class="gallery__item" href="${original}"><img class="gallery__image" src="${preview}" alt="${description}" /></a>`
    }).join(``);
}
let lightbox = new SimpleLightbox('.gallery a', {
    captionsData: `alt`,
    captionDelay: 250,
});