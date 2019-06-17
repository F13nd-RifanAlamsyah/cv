
$(window).scroll(function(){
	 var scrollpos = $(this).scrollTop();
	 $(".cover").css({
	 	'background-size' :  100 + scrollpos + '%'
	 })
})
AOS.init({
	duration : 2000,
});
