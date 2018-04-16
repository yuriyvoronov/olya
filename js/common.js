$( function() {
    $( "#sortable" ).sortable();
    
  } );

$( function() {
    $( "#test" ).resizable({
      maxHeight: 250,
      maxWidth: 350,
      minHeight: 150,
      minWidth: 200
    });
  } );
$(function(){
	$(".header-profile__icon").click(function(){
		$(".header-drop-menu").toggleClass("enabled");
	});
});