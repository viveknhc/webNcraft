$(document).ready(function () {
    var owl = $("#testimonial-carousel");
    owl.owlCarousel({
        loop: true,
        autoplay:true,
        margin: 10,
        nav: false, 
        responsive: {
            0: {
                items: 1,
                nav: false,
            },
            600: {
                items: 3,
                nav: false,
            },
            1000: {
                items: 3
            }
        }
    });

    $('.custom-next').click(function () {
        owl.trigger('next.owl.carousel');
    });
    $('.custom-prev').click(function () {
        owl.trigger('prev.owl.carousel');
    });
});



// aos

AOS.init();