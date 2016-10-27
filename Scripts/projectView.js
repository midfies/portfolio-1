var projectView = {};

articleView.populateFilters = function() {
  $('article').not('.template').each(function() {
    var projectName, optionTag;
    projectName = $(this).find('address a').text();
    optionTag = '<option value="' + projectName + '">' + projectName + '</option>';
    $('#project-filter').append(optionTag);

  });
};

articleView.handleProjectFilter = function() {
  $('#project-filter').on('change', function() {
    if ($(this).val()) {
      $('article').hide();
      $('article[data-project="' + $(this).val() + '"]').fadeIn();

    } else {
      $('article').fadeIn();
      $('article.template').hide();

    }
    $('#project-filter').val('');
  });
};

articleView.handleMainNav = function () {
  $('.main-nav').on('click', '.tab', function() {
    $('.tab-content').hide();
    $('#' + $(this).data('content')).fadeIn();
  });
  $('.main-nav .tab:first').click();
};

articleView.setTeasers = function() {
  $('.article-body *:nth-of-type(n+2)').hide();
  $('#articles').on('click', 'a.read-on', function(noRefresh) {
    noRefresh.preventDefault();
    $('.article-body').show();
    $(this).parent().find('*').fadeIn();
    $(this).hide();
  });
};

articleView.populateFilters();
articleView.handleAuthorFilter();
articleView.handleMainNav();
articleView.setTeasers();
