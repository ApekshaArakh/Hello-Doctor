
$(document) .ready(function (){

    $('.fa-bars').click(function(){
        $(this).toggleClass('.fa-times');
        $('.nav').toggleClass('nav-toggle')
    })
})




// var sidemenu = document.getElementById("sidemenu");
//         function openmenu(){
//             sidemenu.style.right = "0px";
//         }
//         function closemenu(){
//             sidemenu.style.right = "-200px";
//         }