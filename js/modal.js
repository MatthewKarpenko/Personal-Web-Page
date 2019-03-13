let images = {
  fashion: document.getElementById('fashion'),
  retro: document.getElementById('oldFashion'),
  film: document.getElementById('film')
}

let albums = {
  modern: ["images/fashion/1.jpg", "images/fashion/2.jpg", "images/fashion/3.jpg", "images/fashion/4.jpg", "images/fashion/5.jpg", "images/fashion/6.jpg"],
  oldStyle: ["images/oldPhotos/1.jpg", "images/oldPhotos/2.jpg", "images/oldPhotos/3.jpg", "images/oldPhotos/4.jpg", "images/oldPhotos/5.jpg", "images/oldPhotos/6.jpg"],
  old: ["images/film/1.jpg", "images/film/2.jpg", "images/film/3.jpg", "images/film/4.jpg", "images/film/5.jpg", "images/film/6.jpg", "images/film/7.jpg"]
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
  console.log(event.target)
  if (event.target === modal) {
    let imgInGallery = imgKeeper.querySelectorAll('.imageGallery')
console.log(imgInGallery)
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
      document.body.style.overflow = "hidden"
    })
  })
}

bigPic.span.addEventListener('click', function() {
  bigPic.block.style.display = "none";
  document.body.style.overflow = ""
})
bigPic.block.addEventListener('click',function(){
  if(event.currentTarget === bigPic.block) {
    bigPic.block.style.display = 'none';
    document.body.style.overflow = ""
  }
})