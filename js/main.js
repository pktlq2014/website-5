$(document).ready(function () {
    "use strict"
    // hiệu ứng chuyển động nước
    $('.slider').ripples({
        dropRadius: 13,
        perturbance: 0.01,
    });

    // hiệu ứng chuyển động chữ
    var typed = new Typed('.typed', {
        stringsElement: '#typed-strings',
        //     strings: ['i love<strong class="primary"> codings.</strong>', 'and to<strong class="primary"> share !!.</strong>'],
        typespeed: 0,
        // lặp lại vô hạn
        loop: true
    });

    const gotoTop = document.querySelector(".container1");
    $(window).scroll(function () {
        var top = $(window).scrollTop();
        if (top >= 10) {
            gotoTop.classList.add("secondary");
            // $("nav").addClass('secondary');
        }
        else {
            gotoTop.classList.remove("secondary");
            //   $("nav").removeClass('secondary');
        }
    });



    // hiệu ứng hiển thị và load khi click vào ảnh
    $('.work').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    // slider
    $('.bxslider').bxSlider({
        mode: 'horizontal',
        moveSlides: 1,
        slideMargin: 40,
        infiniteLoop: true,
        minSliders: 1,
        maxSlides: 1,
        speed: 1200,

    });



    // ảnh swiper
    if ($(".swiper-container").hasClass("team-member-slider")) {
        var swiper = new Swiper('.swiper-container', {
            slidesPerView: 3,
            allowTouchMove: true,
            loop: true,
            centeredSlides: true,
            slideToclickedslide: true,
            effect: "coverflow",
            grabcursor: true,
            autoplay: false,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },
            coverflow: {
                rotate: 0,
                stretch: 100,
                depth: 200,
                modifier: 1,
                slideShadows: false
            },
            breakpoints: {
                767: {
                    slidesPerView: 1,
                    centeredSlides: false,
                    effect: "slide",
                }
            }
        });
    }



    $("#work").magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });




    const questions = document.querySelectorAll(".question");
    questions.forEach(function (question) {
        const btn = question.querySelector(".question-btn");
        btn.addEventListener("click", function () {
            // questions.forEach(function (item) {
            //     if (item !== question) {
            //         item.classList.remove("show-text");
            //     }
            // });
            question.classList.toggle("show-text");
        });
    });




    let tabHeader = document.querySelector(".tab-header");
    let tabIndicator = document.querySelector(".tab-indicator");
    let tabBody = document.querySelector(".tab-body");
    let tabsPane = tabHeader.getElementsByTagName("div");

    for (let i = 0; i < tabsPane.length; i++) {
        tabsPane[i].addEventListener("click", function () {
            tabHeader.querySelector(".active").classList.remove("active");
            // khi click vào thằng div thứ 2 trong header
            tabsPane[i].classList.add("active");
            tabBody.querySelector(".active").classList.remove("active");
            tabBody.getElementsByTagName("div")[i].classList.add("active");
            tabIndicator.style.left = `calc(calc(100% / 4) * ${i})`;
        });
    }
});