$(document).ready(function () {
  $('.add_more').click(function () {
    $('.multiple .duplicate:last-child').clone().appendTo('.multiple');
  });
});
