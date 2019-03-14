let images = {
  fashion: document.getElementById('fashion'),
  retro: document.getElementById('oldFashion'),
  film: document.getElementById('film')
}

let albums = {
  modern: ["images/fashionBad/1.jpg", "images/fashionBad/2.jpg", "images/fashionBad/3.jpg", "images/fashionBad/4.jpg", "images/fashionBad/5.jpg", "images/fashionBad/17.jpg", "images/fashionBad/7.jpg", "images/fashionBad/8.jpg", "images/fashionBad/9.jpg", "images/fashionBad/10.jpg", "images/fashionBad/19.jpg", "images/fashionBad/12.jpg", "images/fashionBad/18.jpg", "images/fashionBad/14.jpg", "images/fashionBad/15.jpg", "images/fashionBad/19.jpg", "images/fashionBad/20.jpg", "images/fashionBad/21.jpg", "images/fashionBad/22.jpg", "images/fashionBad/23.jpg", "images/fashionBad/24.jpg", "images/fashionBad/25.jpg" ],
  oldStyle: ["images/oldPhotosBad/1.jpg", "images/oldPhotosBad/2.jpg", "images/oldPhotosBad/3.jpg", "images/oldPhotosBad/4.jpg", "images/oldPhotosBad/5.jpg", "images/oldPhotosBad/17.jpg", "images/oldPhotosBad/7.jpg", "images/oldPhotosBad/8.jpg", "images/oldPhotosBad/9.jpg", "images/oldPhotosBad/10.jpg", "images/oldPhotosBad/19.jpg", "images/oldPhotosBad/12.jpg", "images/oldPhotosBad/18.jpg", "images/oldPhotosBad/14.jpg", "images/oldPhotosBad/15.jpg", "images/oldPhotosBad/19.jpg", "images/oldPhotosBad/20.jpg", "images/oldPhotosBad/21.jpg", "images/oldPhotosBad/22.jpg", "images/oldPhotosBad/23.jpg", "images/oldPhotosBad/24.jpg"],
  old: ["images/film/1.JPG", "images/film/2.JPG", "images/film/3.JPG", "images/film/4.JPG", "images/film/5.JPG", "images/film/17.JPG", "images/film/7.JPG", "images/film/8.JPG", "images/film/9.JPG", "images/film/10.JPG", "images/film/19.JPG", "images/film/12.JPG", "images/film/18.JPG", "images/film/14.JPG", "images/film/15.JPG", "images/film/19.JPG", "images/film/20.JPG", "images/film/21.JPG", "images/film/22.JPG", "images/film/23.JPG", "images/film/24.JPG"]
}

let bigPic = {
  block: document.getElementById('myModal'),
  picture: document.getElementById("img01"),
  span: document.querySelector('.close')
}

let goodQuality = {
  future: ["images/fashion/1.jpg", "images/fashion/2.jpg", "images/fashion/3.jpg", "images/fashion/4.jpg", "images/fashion/5.jpg", "images/fashion/17.jpg", "images/fashion/7.jpg", "images/fashion/8.jpg", "images/fashion/9.jpg", "images/fashion/10.jpg", "images/fashion/19.jpg", "images/fashion/12.jpg", "images/fashion/18.jpg", "images/fashion/14.jpg", "images/fashion/15.jpg", "images/fashion/19.jpg", "images/fashion/20.jpg", "images/fashion/21.jpg", "images/fashion/22.jpg", "images/fashion/23.jpg", "images/fashion/24.jpg", "images/fashion/25.jpg" ],
  past: ["images/oldPhotos/1.jpg", "images/oldPhotos/2.jpg", "images/oldPhotos/3.jpg", "images/oldPhotos/4.jpg", "images/oldPhotos/5.jpg", "images/oldPhotos/17.jpg", "images/oldPhotos/7.jpg", "images/oldPhotos/8.jpg", "images/oldPhotos/9.jpg", "images/oldPhotos/10.jpg", "images/oldPhotos/19.jpg", "images/oldPhotos/12.jpg", "images/oldPhotos/18.jpg", "images/oldPhotos/14.jpg", "images/oldPhotos/15.jpg", "images/oldPhotos/19.jpg", "images/oldPhotos/20.jpg", "images/oldPhotos/21.jpg", "images/oldPhotos/22.jpg", "images/oldPhotos/23.jpg", "images/oldPhotos/24.jpg"],
  older: ["/images/film/1.JPG", "/images/film/2.JPG", "/images/film/3.JPG", "../images/film/4.JPG", "images/film/5.JPG", "images/film/17.JPG", "images/film/7.JPG", "images/film/8.JPG", "images/film/9.JPG", "images/film/10.JPG", "images/film/19.JPG", "images/film/12.JPG", "images/film/18.JPG", "images/film/14.JPG", "images/film/15.JPG", "images/film/19.JPG", "images/film/20.JPG", "images/film/21.JPG", "images/film/22.JPG", "images/film/23.JPG", "images/film/24.JPG"]
}


let modal = document.querySelector('#modalBackground');
let imgKeeper = document.querySelector('#albumModal');
let categoriesPics = document.querySelectorAll('.imageTypes');
let clickedAlbum


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
    newImage.classList.add('hoverable')
    imgKeeper.appendChild(newImage)
  })
  modalFunctionality()

}

function showCategory() {
  categoriesPics.forEach(function (arrElem) {
    arrElem.addEventListener('click', function () {
      if (arrElem.id == 'fashion') {
        showAlbums(albums.modern)
        clickedAlbum = goodQuality.future;
      } else if (arrElem.id == 'oldFashion') {
        showAlbums(albums.oldStyle)
        clickedAlbum = goodQuality.past;
      } else if (arrElem.id == "film") {
        showAlbums(albums.old)
        clickedAlbum = goodQuality.older;
      }
    })
  })
  
}

window.onload = showCategory;

function modalFunctionality() {
  document.querySelectorAll('.imageGallery').forEach(function(arrElem){
    arrElem.addEventListener('click', function() {
      let reverseTargetWord = event.target.src.split("").reverse().join("").substring(0,6);
      
      for (let i = 0; i < clickedAlbum.length; i++){
        let reverseArrayPhoto = clickedAlbum[i].split("").reverse().join("").substring(0, 6)
        if (reverseTargetWord === reverseArrayPhoto){

          bigPic.block.style.display = "block";
          bigPic.picture.src = clickedAlbum[i];
        }
      }
      
    })
  })
}

bigPic.span.addEventListener('click', function() {
  bigPic.block.style.display = "none";
  
})
bigPic.block.addEventListener('click',function(){
  if(event.target === bigPic.block) {
    bigPic.block.style.display = 'none';
  
  }
})

function reverseString(str) {
  
  return reverseWord
}
