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