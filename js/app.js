// show btn
$(".show-sidebar-btn").click(function () {
    $(".sidebar").animate({ marginLeft:0});
});
// hide btn
$(".hide-sidebar-btn").click(function () {
    $(".sidebar").animate({ marginLeft:"-100%"});
});

function go(url){
    setTimeout(function(){
     location.href = `${url}`;
    },500)
};


var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
});

// first way to toggle class 
// $(".full-screen-btn").click(function(){
//     $(this).closest(".card").toggleClass("full-screen-card");
//     $(".feather-maximize-2").toggleClass("feather-minimize-2");
// });

// change i con  with if else
$(".full-screen-btn").click(function(){
     
    let current = $(this).closest(".card");

    current.toggleClass("full-screen-card");
     console.log(current.hasClass("full-screen-card"));

    if(current.hasClass("full-screen-card")){
        $(this).html(` <i class="feather-minimize-2"></i>`);
    }else{
        $(this).html(` <i class="feather-maximize-2"></i>`);
    }

    
});

// scroll to active menu column

let screenHeight =$(window).height();
let currentMenuHeight = $(".nav-menu .active").offset().top;

if(currentMenuHeight >screenHeight*0.8){
     $(".sidebar").animate({
       scrollTop:currentMenuHeight
     },1000);
};



