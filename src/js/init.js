// Add Active Class To Current Link
var url = window.location; // get current URL
$('#nav a[href="'+url+'"]').addClass('active');

var $activeUL = $('.active').closest('ul');
/*
Revise below condition that tests if .active is a submenu
*/
if($activeUL.attr('id') != 'nav') { //check if it is submenu
    $activeUL
        .parent() //This should return the li
        .children('a') //The childrens are <a> and <ul>
        .addClass('active'); //add class active to the a    
}


// Set the date we're counting down to
var countDownDate = new Date("Jun 21, 2019").getTime();

// Update the count down every 1 second
//var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));

    // Output the result in an element with id="demo"
    document.getElementById("ccDay").innerHTML = days + " days until";

    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("ccDay").innerHTML = "Today is";
    }
//}, 1000);



$(window).scroll(function () {  
    var scrollPos = window.scrollY; 
    var windowHeight = window.outerHeight; 
//    var scrollPos = (window.scrollY / 100) - 5; 
//    $('.home-divider').css({
//        'transform': 'rotate(' + (scrollPos) + 'deg)' + 'scale(1.15)'
//    });
    
    var opacity = 1;
    $('.home-hero').css({
        opacity: function() {
            opacity = (windowHeight - scrollPos) / windowHeight;

            return opacity;
        }
    });
});

$(window).scroll(function (event) {
    var current = $(window).scrollTop();
     
    $(".image1").css({transform:'translateX('+current/25+'px)'});
    $(".image2").css({transform:'translateX('+current/-25+'px)'});
});