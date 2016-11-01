var projectView = {};

projectView.populateFilters = function() {
  $('article').not('.template').each(function() {
    var projectName, optionTag;
    projectName = $(this).find('h1').text();
    optionTag = '<option value="' + projectName + '">' + projectName + '</option>';
    $('#project-filter').append(optionTag);

  });
};

// projectView.render = function() {
//   articles.forEach(function(a) {
//     $('#projects').append(a.toHtml('#article-template'));
//     $('#project-filter').append(a.toHtml('#project-filter-template'));
//
//   });
//   $('pre code').each(function(i, block) {
//     hljs.highlightBlock(block);
//   });
// };

projectView.handleProjectFilter = function() {
  $('#project-filter').on('change', function() {
    if ($(this).val()) {
      $('article').hide();
      $('article[data-title="' + $(this).val() + '"]').fadeIn();

    } else {
      $('article').fadeIn();
      $('article.template').hide();

    }

  });
};

projectView.handleMainNav = function () {
  $('.main-nav').on('click', '.tab', function(noRefresh) {
    $('.tab-content').hide();
    $('#' + $(this).data('content')).fadeIn();
  });
  $('.main-nav .tab:first').click();
};

projectView.setTeasers = function() {
  $('.article-body *:nth-of-type(n+2)').hide();

  $('#projects').on('click', 'a.read-on', function(noRefresh) {
    noRefresh.preventDefault();
    if($(this).text() === 'Read on →') {
      $(this).parent().find('*').fadeIn();
      $(this).html('Show Less &larr;');
    } else {
      $('body').animate({
        scrollTop: ($(this).parent().offset().top)
      },200);
      $(this).html('Read on &rarr;');
      $(this).parent().find('.article-body *:nth-of-type(n+2)').hide();

    }
  });
};

// projectView.initNewArticlePage = function() {
//   $('#article-json').on('focus', function() {
//     $(this).select();
//   });
//
//   $('#new-form').on('change', articleView.create);
// };
//
// articleView.create = function() {
//   $('#article-preview').empty().fadeIn();
//
//   var formArticle = new Article({
//     title: $('#article-title').val(),
//     body: $('#article-body').val(),
//     publishedOn: $('#article-published:checked').length ? new Date() : 'draft'
//   });
//   $('#article-preview').append(formArticle.toHtml('#article-template'));
//
//   $('pre code').each(function(i, block) {
//     hljs.highlightBlock(block);
//   });
//
//   $('#article-json').val(JSON.stringify(formArticle) + ',');
// };
//
// projectView.initNewArticlePage();
// projectView.render();

projectView.populateFilters();
projectView.handleProjectFilter();
projectView.handleMainNav();
projectView.setTeasers();
