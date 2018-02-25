$(document).ready(function () {
	"use strict";
	var swiper = new Swiper('.swiper-container-discount', {
		slidesPerView: 4,
		spaceBetween: 30,
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev',
		 breakpoints: {
            600: {
                slidesPerView: 1,
            },
            950: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 3,
            }
        }
	});

});

