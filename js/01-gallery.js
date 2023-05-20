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

    const imgRef = event.target;
    
    if (imgRef.nodeName !== 'IMG') {
        return;
    }
    
    const originalHrefRef = imgRef.dataset.source;
    // const originalHrefRef = imgRef.parentNode.href;

    const instance = basicLightbox.create(
        `<img src="${originalHrefRef}" width="800" height="600">`,
        {
            onShow: () => { document.addEventListener('keydown', onKeyDownEscape) },
            onClose: () => { document.removeEventListener('keydown', onKeyDownEscape) }
        });
    
    instance.show();

    function onKeyDownEscape(event) {
    if (event.key === 'Escape') {
             instance.close();
        }
    };   
}




