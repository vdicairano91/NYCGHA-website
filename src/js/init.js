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