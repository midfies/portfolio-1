var projectView = {};

projectView.populateFilters = function() {
  $('article').not('.template').each(function() {
    var projectName, optionTag;
    projectName = $(this).find('address a').text();
    optionTag = '<option value="' + projectName + '">' + projectName + '</option>';
    $('#project-filter').append(optionTag);

  });
};

projectView.handleProjectFilter = function() {
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

projectView.handleMainNav = function () {
  $('.main-nav').on('click', '.tab', function() {
    $('.tab-content').hide();
    $('#' + $(this).data('content')).fadeIn();
  });
  $('.main-nav .tab:first').click();
};

projectView.setTeasers = function() {
  $('.article-body *:nth-of-type(n+2)').hide();
  $('#articles').on('click', 'a.read-on', function(noRefresh) {
    noRefresh.preventDefault();
    $('.article-body').show();
    $(this).parent().find('*').fadeIn();
    $(this).hide();
  });
};

projectView.populateFilters();
projectView.handleProjectFilter();
projectView.handleMainNav();
projectView.setTeasers();
