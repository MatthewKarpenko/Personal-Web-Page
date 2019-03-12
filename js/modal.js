let images = {
  fashion: document.getElementById('fashion'),
  retro: document.getElementById('oldFashion'),
  film: document.getElementById('film')
}

let albums = {
  modern: ["images/fashion/1.jpg", "images/fashion/2.jpg", "images/fashion/3.jpg", "images/fashion/4.jpg", "images/fashion/5.jpg", "images/fashion/6.jpg", "images/fashion/7.jpg", "images/fashion/8.jpg", "images/fashion/9.jpg", "images/fashion/10.jpg", "images/fashion/11.jpg", "images/fashion/12.jpg", "images/fashion/13.jpg"],
  oldStyle: ["images/oldPhotos/1.jpg", "images/oldPhotos/2.jpg", "images/oldPhotos/3.jpg", "images/oldPhotos/4.jpg", "images/oldPhotos/5.jpg", "images/oldPhotos/6.jpg", "images/oldPhotos/7.jpg", "images/oldPhotos/8.jpg", "images/oldPhotos/9.jpg", "images/oldPhotos/10.jpg", "images/oldPhotos/11.jpg", "images/oldPhotos/12.jpg"],
  old: ["images/film/1.jpg", "images/film/2.jpg", "images/film/3.jpg", "images/film/4.jpg", "images/film/5.jpg", "images/film/6.jpg", "images/film/7.jpg", "images/film/8.jpg"]
}

let modal = document.querySelector('#modalBackground');
let imgKeeper = document.querySelector('#albumModal');
let categoriesPics = document.querySelectorAll('.imageTypes');

modal.addEventListener('click', function () {
  if (event.currentTarget == modal) {
    let imgInGallery = imgKeeper.querySelectorAll('.imageTypes')

    modal.classList.add('hidden');
    document.body.style.overflow = "";
    imgInGallery.forEach(function (arrElem) {
      arrElem.remove()
    })
  }
})

function showAlbums(images, event) {
  modal.classList.remove('hidden');
  document.body.style.overflow = "hidden";

  images.forEach(function (arrElement) {
    let newImage = document.createElement('IMG');
    newImage.src = arrElement;
    newImage.classList.add('imageGallery');
    imgKeeper.appendChild(newImage)
  })

}

function showCategory() {
  categoriesPics.forEach(function (arrElem) {
    arrElem.addEventListener('click', function () {
      if (arrElem.id == 'fashion') {
        showAlbums(albums.modern)
      } else if (arrElem.id == 'oldFashion') {
        showAlbums(albums.oldStyle)

      } else if (arrElem.id == "film") {
        showAlbums(albums.old)
      }
    })
  })
}

window.onload = showCategory