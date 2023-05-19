import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector('.gallery');

const itemOfImgString = galleryItems.map(({ preview, original, description }) =>
`<li class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" /></a></li>`
).join('');

galleryRef.innerHTML = itemOfImgString;

galleryRef.addEventListener('click', onClick);

function onClick(event) {
    event.preventDefault();
    
    if (!event.target.classList.contains('gallery__image')) {
        return;
    }

    const imgRef = event.target;
    const originalHrefRef = imgRef.dataset.source;
    // const originalHrefRef = imgRef.parentNode.href;

    const instance = basicLightbox.create(`
        <img src="${originalHrefRef}" width="800" height="600">
    `)
    instance.show();

    document.addEventListener('keydown', event => {
        if (event.key === 'Escape') {
             instance.close();
        }
    });

}

