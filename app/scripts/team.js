const team = () => {

  $('.team__min-copy').on('click', function () {

    var $this = $(this),
        name = $this.find('.team__photo-min__name span').html(),
        text = $this.find('.team__description__text').html(),
        social = $this.find('.team__description__social').html(),
        image = $this.find('img').attr('src');

    $('.team__min-copy').removeClass('active');
    $this.addClass('active');
    $('.team__name').html(name);
    $('.team__info').html(text);
    $('.team__social').html(social);
    $('.team__photo-big img').attr('src', image);
  })

}
export default team;
