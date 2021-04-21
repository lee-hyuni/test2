$(document).ready(function () {

  var $grid = $(".grid");
  var $filter = $(".filter a");

  $('.grid').isotope({
    itemSelector: '.item',
    percentPosition: true,
    masonry: {
      columnWidth: '.sizer'
    }
  });

  //sort
  $filter.on("click", function (e) {
    e.preventDefault();
    var $this = $(this);
    $filter.removeClass("on");
    $this.addClass("on");
    var selector = $this.attr('data-filter');
    $grid.isotope({ filter: selector });
  });
});
