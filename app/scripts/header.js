const header = () => {

  $(window).scroll(function () {
    $('.header').removeClass('sticky');
    if ($(this).scrollTop() > 30) {
      $('.header').addClass('sticky');
    } else {
      $('.header').removeClass('sticky');
    }
  })

}
export default header;
