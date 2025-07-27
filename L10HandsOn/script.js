$(document).ready(function () {
  $('.icon').hover(
    function () {
      $(this).css('transform', 'scale(1.2)');
    },
    function () {
      $(this).css('transform', 'scale(1)');
    }
  );

  $.ajax({
    url: 'https://api.github.com/users/JeremyTShields/repos',
    method: 'GET',
    success: function (repos) {
      repos.forEach(function (repo) {
        $('#repo-list').append(`<li><a href="${repo.html_url}" target="_blank">${repo.name}</a></li>`);
      });
    }
  });
});