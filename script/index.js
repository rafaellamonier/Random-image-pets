const catApiUrl = "https://aws.random.cat/meow";
const dogApiUrl = "https://dog.ceo/api/breeds/image/random";
const foxApiUrl = "https://randomfox.ca/floof/";
const buttonElementCat = document.querySelector(".btn-cat");
const buttonElementDog = document.querySelector(".btn-dog");
const buttonElementFox = document.querySelector(".btn-fox");
const imgElementCat = document.querySelector(".card-img-cat");
const imgElementDog = document.querySelector(".card-img-dog");
const imgElementFox = document.querySelector(".card-img-fox");

// Generate cats
buttonElementCat.addEventListener('click', function() {
  fetch(catApiUrl)
  .then((resp) => resp.json())
  .then(function(data) {
    var imgSrc = data.file;
    imgElementCat.src = imgSrc; 
  });  
});

// Generate dogs
buttonElementDog.addEventListener('click', function() {
  fetch(dogApiUrl)
  .then((resp) => resp.json())
  .then(function(data) {
    var imgSrc = data.message;
    imgElementDog.src = imgSrc; 
  });  
});

// Generate fox
buttonElementFox.addEventListener('click', function() {
  fetch(foxApiUrl)
  .then((resp) => resp.json())
  .then(function(data) {
    var imgSrc = data.image;
    imgElementFox.src = imgSrc; 
  });  
});

