$(document).on('scroll', function () {
  const windowHeight = $(window).height()
  const scrollValue = $(this).scrollTop()
  // console.log(scrollValue);

  const $right = $('.right');
  const rightFromTop = $right.offset().top
  const rightHeight = $right.outerHeight()
  // console.log(rightHeight);

  const $left = $('.left');
  const leftFromTop = $left.offset().top
  const leftHeight = $left.outerHeight()

  if (scrollValue > rightFromTop + rightHeight - windowHeight) {
    $right.addClass('active');
  }

  if (scrollValue > leftFromTop + leftHeight - windowHeight) {
    $left.addClass('active');
  }

  //clearing
  if (scrollValue < 100) {
    $('.right').removeClass('active');
    $('.left').removeClass('active');
  }
})

$(document).on('scroll', function () {
  const windowHeight = $(window).height()
  const scrollValue = $(this).scrollTop()

  const $desctxt = $('.desctxt');
  const desctxtFromTop = $desctxt.offset().top
  const desctxtHeight = $desctxt.outerHeight()

  if (scrollValue > desctxtFromTop + desctxtHeight / 2 - windowHeight) {
    $desctxt.addClass('active');
  }

  //clearing
  if (scrollValue < 100) {
    $('.desctxt').removeClass('active');
  }
})

$('.shield').on('click', function () {
  $('body, html').animate({
    scrollTop: $('.shd').offset().top
  }, 400);
})


$('.pit').on('click', function () {
  $('body, html').animate({
    scrollTop: $('.tax').offset().top
  }, 400);
})