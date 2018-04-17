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
    	
    });
  } );
$(function(){
	$(".header-profile__icon").click(function(){
		$(".header-drop-menu").toggleClass("enabled");
	});
});