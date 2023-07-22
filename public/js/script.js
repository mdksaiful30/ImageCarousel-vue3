/**

 */
(function() {
    "use strict";


    $(document).ready(function() {
        // Set the second slide as active
        $('#carouselExampleCaptions .carousel-item').eq(1).addClass('active');
        // Set the second indicator as active (optional but recommended)
        $('#carouselExampleCaptions .carousel-indicators li').eq(1).addClass('active');
    });
    // /**
    //  * Animation on scroll
    //  */
    // window.addEventListener('load', () => {
    //     AOS.init({
    //         duration: 1000,
    //         easing: 'ease-in-out',
    //         once: true,
    //         mirror: false
    //     })
    // });



})()