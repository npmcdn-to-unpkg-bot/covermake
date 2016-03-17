var $grid = $('.grid').masonry({
  	columnWidth: '.grid-sizer',
	gutter: '.gutter-sizer',
	itemSelector: '.grid-item',
	percentPosition: true,
});

$grid.imagesLoaded().progress( function() {
  $grid.masonry();
}); 