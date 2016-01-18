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
