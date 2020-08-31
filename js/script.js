$(function () {
    var header = $(".navbar1");
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 90) {
            header.addClass("scrolled");
        } else {
            header.removeClass("scrolled");
        }
    });
});
//navbar

$(function () {
    var navMain = $(".navbar-collapse");

    navMain.on("click", "a", null, function () {
        navMain.collapse('hide');
    });
});

//scroll indicator

window.onscroll = function () {
    myFunction()
};

function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}

//counter

$('.count_number').counterUp({
    delay: 10,
    time: 2000
});

//scroll to top

$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#scroll').fadeIn();
        } else {
            $('#scroll').fadeOut();
        }
    });
    $('#scroll').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });
});

// owl-carousel

$('.owl-carousel').owlCarousel({
    stagePadding: 200,
    loop: true,
    margin: 10,
    autoplay: true,
    items: 1,
    lazyLoad: true,
    nav: false,
    navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
    responsive: {
        0: {
            items: 1,
            stagePadding: 60
        },
        600: {
            items: 1,
            stagePadding: 100
        },
        1000: {
            items: 1,
            stagePadding: 200
        },
        1200: {
            items: 1,
            stagePadding: 250
        },
        1400: {
            items: 1,
            stagePadding: 300
        },
        1600: {
            items: 1,
            stagePadding: 350
        },
        1800: {
            items: 1,
            stagePadding: 400
        }
    }
});

$(document).ready(function () {
    $('.customer-logos').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 2
            },
            breakpoint: 575,
            settings: {
                slidesToShow: 2
            },
            breakpoint: 425,
            settings: {
                slidesToShow: 1
            }
        }]
    });
});

new WOW().init();
