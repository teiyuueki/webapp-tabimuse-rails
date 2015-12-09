
//= require jquery
//= require jquery.turbolinks
//= require jquery_ujs
//= require jquery.infinitescroll
//= require turbolinks

//= require swiper
//= require photoswipe
//= require photoswipe-ui-default
//= require jquery.sliderPro
//= require index


$(document).ready(function() {
  if ($('.pagination').length) {
    $(window).scroll(function() {
      var url = $('.pagination .next_page').attr('href');
      console.log("urlの追加will_pagenate")
      console.log(url)
      if (url && $(window).scrollTop() > $(document).height() - $(window).height() - 50) {
        $('.pagination').text('');
        return $.getScript(url);

        console.log('pagenated')
      }
    });
    return $(window).scroll();
  }
});