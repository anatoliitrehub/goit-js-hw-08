// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
console.log(galleryItems);


const divGallery = document.querySelector('.gallery');
galleryItems.forEach(el=>{
    divGallery.insertAdjacentHTML('afterbegin',
    `<div class="gallery__item">
        <a class="gallery__link" href=${el.original}>
            <img class="gallery__image" src=${el.preview} alt="${el.description}"/>
        </a>
    </div>`
    )
    
});

let simpleGallery = new SimpleLightbox('.gallery__link',{captionsData:'alt', captionDelay:250});
   // simpleGallery.on('show.simplelightbox'); // dont need this
