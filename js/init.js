(function($){
  $(function(){

    $('.button-collapse').sideNav();

  }); // end of document ready
})(jQuery); // end of jQuery name space

function autoResizeDiv()
{
    document.getElementById('index-banner').style.height = window.innerHeight +'px';
}
window.onresize = autoResizeDiv;
autoResizeDiv();

// cards fade in
sections = $(".fade-in").fadeTo(0, 0); //fade to 0 initially
$(window).scroll(function(d,h) { // on scroll
    sections.each(function(i) {
        sectionsPos = $(this).offset().top + $(this).height();
        currPos = $(window).scrollTop() + $(window).height() +150;
        // console.log($(window).scrollTop());
        if (sectionsPos < currPos) $(this).fadeTo(1000,1);
    });
});
