!function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){n(1),n(2),n(3),e.exports=n(4)},function(e,t){},function(e,t){$(document).ready((function(){var e=new Swiper(".image-feedback",{pagination:{el:".swiper-pagination-feedback",type:"bullets",clickable:!0,dynamicBullets:!0,renderBullet:function(e,t){return'<span class="'+t+'">'+(e+1)+"</span>"}},effect:"fade",fadeEffect:{crossFade:!0},direction:"horizontal",slideToClickedSlide:!0,loop:!0,loopedSlides:0,simulateTouch:!0,touchRatio:1,touchAngle:45,keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},autoHeight:!0,slidesPerView:1,watchOverflow:!0,spaceBetween:0,slidesPerGroup:1,centeredSlides:!0,initialSlide:0,slidesPerColumn:1,speed:700,lazy:!1,a11y:{firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide",paginationBulletMessage:"Go to slide {{index}}",notificationClass:"swiper-notification"}}),t=document.querySelector(".image-feedback");t.addEventListener("mouseenter",(function(t){e.params.autoplay.disableOnInteraction=!1,e.params.autoplay.delay=3e3,e.autoplay.start()})),t.addEventListener("mouseleave",(function(t){e.autoplay.stop()}))})),document.querySelectorAll(".swiper-v").forEach((function(e,t){console.log(e.parentElement.querySelector(".single-slider__button-next"));new Swiper(e,{slidesPerView:1,navigation:{nextEl:e.parentElement.querySelector(".single-slider__button-next"),prevEl:e.parentElement.querySelector(".single-slider__button-prev")},pagination:{el:e.parentElement.querySelector(".single-slider__pagination"),type:"fraction",formatFractionCurrent:function(e){return("0"+e).slice(-2)},formatFractionTotal:function(e){return("0"+e).slice(-2)},renderFraction:function(e,t){return'<span class="'+e+'"></span> / <span class="'+t+'"></span>'}}})}))},function(e,t){$(document).ready((function(){$(".header__burger").click((function(e){e.preventDefault(),$(".header__burger, .header__navigation").toggleClass("active"),$("body").toggleClass("lock"),$("#logo").toggle(),$("#language").toggle(),$("#logo--burger").toggle()}))})),$(document).ready((function(){$("#select__box__btn").click((function(e){e.preventDefault(),$("#select__box__list").toggle()}))})),$(document).ready((function(){$("#footer--select__box__btn").click((function(e){e.preventDefault(),$("#footer--select__box__list").toggle()}))})),$(document).ready((function(){$("#contacts__box__title-places").click((function(e){e.preventDefault(),$("#contacts__list-places").toggle()}))})),$(document).ready((function(){$("#contacts__box__title-mood").click((function(e){e.preventDefault(),$("#contacts__list-mod").toggle()}))})),$(document).ready((function(){$("#contacts__box__title-articles").click((function(e){e.preventDefault(),$("#contacts__list-articles").toggle()}))})),$(document).ready((function(){$("#contacts__box__title-games").click((function(e){e.preventDefault(),$("#contacts__list-games").toggle()}))})),$(document).ready((function(){$("#contacts__box__title-pages").click((function(e){e.preventDefault(),$("#contacts__list-pages").toggle()}))}))},function(e,t){$(document).ready((function(){var e=new Swiper(".image-slider",{navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",type:"bullets",clickable:!0,renderBullet:function(e,t){return'<span class="'+t+'">'+(e<10?"0"+(e+1):e+1)+" "+$(".swiper-slide").eq(e).attr("data-title")+"</span>"}},effect:"fade",fadeEffect:{crossFade:!0},scrollbar:{el:".swiper-scrollbar",draggable:"true",dragSize:16,snapOnRelease:!0,hide:!1},mousewheel:{enabled:!0,sensitivity:1,eventsTarget:".image-slider"},direction:"horizontal",slideToClickedSlide:!0,breakpointsBase:"container",grabCursor:!0,loop:!0,loopedSlides:0,simulateTouch:!0,touchRatio:1,touchAngle:45,hashNavigation:{},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},autoHeight:!1,slidesPerView:1,watchOverflow:!0,spaceBetween:0,slidesPerGroup:1,centeredSlides:!0,initialSlide:0,slidesPerColumn:1,speed:700,breakpoints:{320:{freeMode:!0,mousewheel:{enabled:!1,sensitivity:1,eventsTarget:".image-slider"}},480:{},990:{}},watchSlidesProgress:!0,watchSlidesVisibility:!0,lazy:!1,a11y:{enabled:!0,prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide",paginationBulletMessage:"Go to slide {{index}}",notificationClass:"swiper-notification"}}),t=document.querySelector(".image-slider");t.addEventListener("mouseenter",(function(t){e.params.autoplay.disableOnInteraction=!1,e.params.autoplay.delay=3e3,e.autoplay.start()})),t.addEventListener("mouseleave",(function(t){e.autoplay.stop()}));var n=document.querySelector(".hero-overlay__count__current");e.on("slideChange",(function(){var t="0"+ ++e.realIndex;n.innerHTML=t})),e.on({transitionStart:function(){var e=document.querySelectorAll("video");Array.prototype.forEach.call(e,(function(e){e.pause()}))},transitionEnd:function(){var e=this.activeIndex;document.getElementsByClassName("swiper-slide")[e].getElementsByTagName("video")[0].play()}})}))}]);