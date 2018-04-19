$( function() {
    $( "#sortable" ).sortable(
		{ 
			containment: ".content-cardboard",
			cancel: ".content-card-main"
		}
		
	);
    
  } );

$( function() {
    $( ".content-card" ).resizable({
		helper: "ui-resizable-helper",
    	animate: true,
		minHeight: "inherit"
    });
  } );
$(function(){
	$(".header-profile__icon").click(function(){
		$(".header-drop-menu").toggleClass("enabled");
	});
});
$(function(){
	$(".header-nav__icon").click(function(){
		$(".navigation").addClass("navigation-active");
	});
	$(".navigation-close__link").click(function(e){
		e.preventDefault();
		$('.navigation').removeClass("navigation-active");
	});
	$(".navigation-board__item").click(function(e){
		e.preventDefault();
		$(".navigation-boards-wrapper").toggleClass("navigation-boards-wrapper-enable");
	});
});