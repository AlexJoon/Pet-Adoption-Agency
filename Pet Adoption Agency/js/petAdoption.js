
// jQuery script for adoption page.

// When the document is ready(loaded to screen), run and hide all 'thank-you-x' div containers. As well as hiding all 'is adopted!' spans.
$('document').ready(function () {

    // .adopted classes for span inside h3.
    $('.adopted-1').hide();
    $('.adopted-2').hide();
    $('.adopted-3').hide();
    $('.adopted-4').hide();
    $('.adopted-5').hide();
    $('.adopted-6').hide();
    $('.adopted-7').hide();
    $('.adopted-8').hide();
    $('.adopted-9').hide();

    // container block that slide toggles to give the adopted message (p tag).
    $('.thank-you-1').hide();
    $('.thank-you-2').hide();
    $('.thank-you-3').hide();
    $('.thank-you-4').hide();
    $('.thank-you-5').hide();
    $('.thank-you-6').hide();
    $('.thank-you-7').hide();
    $('.thank-you-8').hide();
    $('.thank-you-9').hide();

    $('#button-sparky').click(function () {

        $('.thank-you-1').slideToggle();
        $('.adopted-1').toggle();

    });

    $('#button-rover').click(function () {

        $('.thank-you-2').slideToggle();
        $('.adopted-2').toggle();


    });

    $('#button-lucy').click(function () {

        $('.thank-you-3').slideToggle();
        $('.adopted-3').toggle();

    });

    $('#button-snowflake').click(function () {

        $('.thank-you-4').slideToggle();
        $('.adopted-4').toggle();


    });

    $('#button-charlotte').click(function () {

        $('.thank-you-5').slideToggle();
        $('.adopted-5').toggle();


    });

    $('#button-hobart').click(function () {

        $('.thank-you-6').slideToggle();
        $('.adopted-6').toggle();


    });

    $('#button-delilah').click(function () {

        $('.thank-you-7').slideToggle();
        $('.adopted-7').toggle();

    });

    $('#button-captain').click(function () {

        $('.thank-you-8').slideToggle();
        $('.adopted-8').toggle();

    });

    $('#button-little').click(function () {

        $('.thank-you-9').slideToggle();
        $('.adopted-9').toggle();

    });


});