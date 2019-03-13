let images = {
  fashion: document.getElementById('fashion'),
  retro: document.getElementById('oldFashion'),
  film: document.getElementById('film')
}

let albums = {
  modern: ["images/fashionBad/1.jpg", "images/fashionBad/2.jpg", "images/fashionBad/3.jpg", "images/fashionBad/4.jpg", "images/fashionBad/5.jpg", "images/fashionBad/17.jpg", "images/fashionBad/7.jpg", "images/fashionBad/8.jpg", "images/fashionBad/9.jpg", "images/fashionBad/10.jpg", "images/fashionBad/19.jpg", "images/fashionBad/12.jpg", "images/fashionBad/18.jpg", "images/fashionBad/14.jpg", "images/fashionBad/15.jpg", "images/fashionBad/19.jpg", "images/fashionBad/20.jpg", "images/fashionBad/21.jpg", "images/fashionBad/22.jpg", "images/fashionBad/23.jpg", "images/fashionBad/24.jpg", "images/fashionBad/25.jpg" ],
  oldStyle: ["images/oldPhotosBad/1.jpg", "images/oldPhotosBad/2.jpg", "images/oldPhotosBad/3.jpg", "images/oldPhotosBad/4.jpg", "images/oldPhotosBad/5.jpg", "images/oldPhotosBad/17.jpg", "images/oldPhotosBad/7.jpg", "images/oldPhotosBad/8.jpg", "images/oldPhotosBad/9.jpg", "images/oldPhotosBad/10.jpg", "images/oldPhotosBad/19.jpg", "images/oldPhotosBad/12.jpg", "images/oldPhotosBad/18.jpg", "images/oldPhotosBad/14.jpg", "images/oldPhotosBad/15.jpg", "images/oldPhotosBad/19.jpg", "images/oldPhotosBad/20.jpg", "images/oldPhotosBad/21.jpg", "images/oldPhotosBad/22.jpg", "images/oldPhotosBad/23.jpg", "images/oldPhotosBad/24.jpg"],
  old: ["images/film/1.jpg", "images/film/2.jpg", "images/film/3.jpg", "images/film/4.jpg", "images/film/5.jpg", "images/film/17.jpg", "images/film/7.jpg", "images/film/8.jpg", "images/film/9.jpg", "images/film/10.jpg", "images/film/19.jpg", "images/film/12.jpg", "images/film/18.jpg", "images/film/14.jpg", "images/film/15.jpg", "images/film/19.jpg", "images/film/20.jpg", "images/film/21.jpg", "images/film/22.jpg", "images/film/23.jpg", "images/film/24.jpg"]
}
let bigPic = {
  block: document.getElementById('myModal'),
  picture: document.getElementById("img01"),
  span: document.querySelector('.close')
}

let modal = document.querySelector('#modalBackground');
let imgKeeper = document.querySelector('#albumModal');
let categoriesPics = document.querySelectorAll('.imageTypes');


modal.addEventListener('click', function () {

  if (event.target === modal) {
    let imgInGallery = imgKeeper.querySelectorAll('.imageGallery')
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
  modalFunctionality()

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

window.onload = showCategory;

function modalFunctionality() {
  document.querySelectorAll('.imageGallery').forEach(function(arrElem){
    arrElem.addEventListener('click', function() {
      bigPic.block.style.display = "block";
      bigPic.picture.src = this.src;
    })
  })
}

bigPic.span.addEventListener('click', function() {
  bigPic.block.style.display = "none";
  
})
bigPic.block.addEventListener('click',function(){
  if(event.currentTarget === bigPic.block) {
    bigPic.block.style.display = 'none';
  
  }
})