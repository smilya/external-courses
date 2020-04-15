'use strict'

// the function to be exported from the module
function setSlider(images, imageNumberParam=0) {
  // flags and shortcuts
  let imageNumber = imageNumberParam;
  let isSliderBusy = false;
  let slideBar = document.querySelector('.slider__slideBar');
  
  // initial filling slides out
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

  document.querySelector('.slider__button--left').addEventListener('click', () => {
    if (isSliderBusy) { 
      return; 
    };
    isSliderBusy = true;    
    imageNumber -= 1;
    if (imageNumber < 0) {
      imageNumber = images.length - 1;
    }
    slideBar.classList.add('slider__slideBar--leftShift');
    setTimeout(() => {
      clearShifts();
      fillSlides(imageNumber, images);
      isSliderBusy = false;
    }, 400);
  });

  document.querySelector('.slider__button--right').addEventListener('click', () => {
    if (isSliderBusy) { 
      return; 
    };
    isSliderBusy = true;    
    imageNumber += 1;
    if (imageNumber > images.length - 1) {
      imageNumber = 0;
    }
    slideBar.classList.add('slider__slideBar--rightShift');
    setTimeout(() => {
      clearShifts();
      fillSlides(imageNumber, images);
      isSliderBusy = false;
    }, 400);  
  });

  function clearShifts() {
    slideBar.classList.remove('slider__slideBar--leftShift');
    slideBar.classList.remove('slider__slideBar--rightShift');
  }
}  