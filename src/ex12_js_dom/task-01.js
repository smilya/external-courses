'use strict'

let images = [
  "./asset/img-1.jpg",
  "./asset/img-2.jpg",
  "./asset/img-3.jpg",
  "./asset/img-4.jpg",
  "./asset/img-5.jpg",
  "./asset/img-6.jpg",
  "./asset/img-7.jpg",
  "./asset/img-8.jpg",

];
let imageNumber = 0;
let isSliderBusy = false;
let slideBar = document.querySelector('.slider__slideBar');
fillSlides(imageNumber, images)

function fillSlides(slideNumber, images) {
  let slides = document.querySelectorAll('.slider__image');
  let slideNumbers = [null, slideNumber, null];
  slideNumbers[0] = slideNumber - 1;
  if (slideNumbers[0] < 0) {
    slideNumbers[0] = images.length - 1;
  }
  slideNumbers[2] = slideNumber + 1;
  if (slideNumbers[2] > images.length - 1) {
    slideNumbers[2] = 0;
  }
  for (let i = 0; i < slides.length; i++) {    
    slides[i].setAttribute('src', images[slideNumbers[i]]); 
  }
}

function clearShifts() {
  slideBar.classList.remove('slider__slideBar--leftShift');
  slideBar.classList.remove('slider__slideBar--rightShift');
}

document.querySelector('.slider__button--left').addEventListener('click', ()=>{
  if (isSliderBusy) { 
    return; 
  };
  isSliderBusy = true;
  slideBar.classList.add('slider__slideBar--leftShift');
  imageNumber -= 1;
  if (imageNumber < 0) {
    imageNumber = images.length - 1;
  }
  setTimeout(() => {
    clearShifts();
    fillSlides(imageNumber, images);
    isSliderBusy = false;
  }, 400);
});

document.querySelector('.slider__button--right').addEventListener('click', ()=>{
  if (isSliderBusy) { 
    return; 
  };
  isSliderBusy = true;
  slideBar.classList.add('slider__slideBar--rightShift');
  imageNumber += 1;
  if (imageNumber > images.length - 1) {
    imageNumber = 0;
  }
  setTimeout(() => {
    clearShifts();
    fillSlides(imageNumber, images);
    isSliderBusy = false;
  }, 400);  
});