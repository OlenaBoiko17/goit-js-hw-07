import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);




const galleryEl = document.querySelector('.gallery');

const getTemplateOfPictures = ({ preview, original, description }) =>
    `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
    </div>`;

const render = () => { 

    const arrayOfStringOfPictures = galleryItems.map(getTemplateOfPictures);

    galleryEl.innerHTML = '';
    galleryEl.insertAdjacentHTML('afterbegin', arrayOfStringOfPictures.join(''));
};
render();

galleryEl.addEventListener('click', onClickOpenModalPicture);

function onClickOpenModalPicture(e) {
    e.preventDefault();
    if ( e.target.nodeName !== 'IMG') {
        return;
    }
    

    const instance = basicLightbox.create(`
        <img src="${e.target.dataset.source}" width="800" height="600">
    `);
    instance.show();
    console.dir(instance);

    window.addEventListener('keydown', onEscCloseModal);
    
    function onEscCloseModal(e) {
        if (e.code !== 'Escape') {
            return;
        }

        instance.close();
        
    }
}
window.removeEventListener('keydown', onEscCloseModal);