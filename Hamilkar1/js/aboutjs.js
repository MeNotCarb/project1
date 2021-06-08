$(document).on('scroll', function () {
  const windowHeight = $(window).height()
  const scrollValue = $(this).scrollTop()

  const $traits = $('.trait1');
  const traitsFromTop = $traits.offset().top
  const traitsHeight = $traits.outerHeight()

  if (scrollValue > traitsFromTop + traitsHeight - windowHeight) {
    $traits.addClass('active');
    $('.trait2').addClass('active');
    $('.trait3').addClass('active');
  }

  //clearing
  if (scrollValue < 100) {
    $('.trait1').removeClass('active');
    $('.trait2').removeClass('active');
    $('.trait3').removeClass('active');
  }
})

$(document).on('scroll', function () {
  const windowHeight = $(window).height()
  const scrollValue = $(this).scrollTop()

  const $abo = $('.abodesc');
  const aboFromTop = $abo.offset().top
  const aboHeight = $abo.outerHeight()

  if (scrollValue > aboFromTop + aboHeight / 2 - windowHeight) {
    $('.abotitle').addClass('active');
    $('.abocontent').addClass('active');
  }

  //clearing
  if (scrollValue < 100) {
    $('.abotitle').removeClass('active');
    $('.abocontent').removeClass('active');
  }
})