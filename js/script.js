/*========================
        preloader
==========================*/
$(window).on('load', function () {
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
});

/*========================
        Team
==========================*/
$(function () {
    $("#team-members").owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            //breakpoint from 0 up
            0: {
                item: 1
            },
            //breakpoint from 480 up
            480: {
                item: 2
            }
        }
    });
});

/*========================
        Progress Bars
==========================*/
$(function () {
    $("#progress-elements").waypoint(function () {
        $(".progress-bar").each(function () {
            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"
            }, 1000);
        });

        $(this).destroy();

    }, {
        offset: 'bottom-in-view'
    });

});
/*========================
        Responsive Tabs
==========================*/
$(function () {
    $("#services-tabs").responsiveTabs({
        animation: 'slide'
    });
});

/*========================
        Portfolio
==========================*/
$(window).on('load', function () {

    //Initialize Isotope
    $("#isotope-container").isotope({});

    //filter items on button click
    $("#isotope-filters").on('click', 'button', function () {

        //get filter value
        var filtervalue = $(this).attr('data-filter');
        //filter portfolio
        $("#isotope-container").isotope({
            filter: filtervalue
        });
        //Active button
        $("#isotope-filters").find('.active').removeClass('active');
        $(this).addClass('active');

    });
});

/*========================
        Magnifier
==========================*/
$(function () {
    $("#portfolio-wrapper").magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});

/*========================
        Testimonials
==========================*/
$(function () {
    $("#testimonial-slider").owlCarousel({
        items: 1,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });
});
/*========================
         Stats
==========================*/
$(function () {
    $(".counter").counterUp({
        delay: 10,
        time: 2000
    });
});
/*============================
     clients
==============================*/
$(function () {
    $("#clients-list").owlCarousel({
        items: 6,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });
});

/*============================
     Google Map
==============================*/
$(window).on('load', function () {
    //Map variables
    var addressString = '230 broadcast, NY, Newyork 10007, USA';
    var myLatlng = {
        lat: 40.712685,
        lng: -74.005920
    };
    //1.Render Map
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 11,
        center: myLatlng
    });
    //2.Add Marker
    var marker = new google.maps.marker({
        position: myLatlng,
        map: map,
        title: ('click to see address')
    });
    //3.Add Info Window
    var infowindow = new google.maps.InfoWindow({
        content: addressString
    });
    //Show info window when user clicks marker 
    marker.AddListener('click', function () {
        infowindow.open(map, marker)
    });
    //4.Resize Function
    google.maps.event.addDomListener(window, 'resize', function () {

        var center = map.getCenter();
        google.maps.event.trigger(map, 'resize');
        map.setCenter(center);

    });
});

/*============================
     Navigation
==============================*/

/*Show & Hide White Navigation*/
$(function () {

    //show/hide nav on page load
    showHideNav();

    $(window).scroll(function () {

        //show/hide nav on page scroll
        showHideNav();

    });

    function showHideNav() {
        if ($(window).scrollTop() > 50) {

            $("nav").addClass("white-nav-top");
            //show Dark logo
            $(".navbar-brand img").attr("src", "img/logo/logo-dark.png");
            //Show back to top button
            $("#back-to-top").fadeIn();
        } else {

            $("nav").removeClass("white-nav-top");
            //Show normal Logo
            $(".navbar-brand img").attr("src", "img/logo/logo.png");
            //Hide back to top button
            $("#back-to-top").fadeOut();

        }
    }

});

//Smooth scrolling
$(function () {


    $("a.smooth-scroll").click(function (event) {

        event.preventDefault();

        //Get section id like #about, #services, #work, #team etc.
        var section_id = $(this).attr("href");

        $("html, body").animate({
            scrollTop: $(section_id).offset().top - 64
        }, 1250, "easeInOutExpo");


    });

});

/*============================
     Mobile menu
==============================*/
$(function () {

    // Show mobile nav
    $("#mobile-nav-open-btn").click(function () {
        $("#mobile-nav").css("height", "100%");
    });


    // Hide mobile nav
    $("#mobile-nav-close-btn, #mobile-nav a").click(function () {
        $("#mobile-nav").css("height", "0%");
    });

});

























