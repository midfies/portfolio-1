var newProject = {};

newProject.initNewProjectPage = function() {
  $('.tab-content').show();
  $('#export-field').hide();
  $('#article-json').on('focus', function(){
    $(this).select();
  });

  $('#new-form').on('change', newProject.create);
};

newProject.create = function() {
  $('#article-preview').empty();


  var formProject= new Project({
    title: $('#article-title').val(),
    body: $('#article-body').val(),
    publishedOn: $('#article-published:checked').length ? new Date() : 'draft'
  });

  $('#article-preview').append(formArticle.toHtml('#article-template'));

  $('pre code').each(function(i, block) {
    hljs.highlightBlock(block);
  });

  $('#export-field').show();
  $('#article-json').val(JSON.stringify(formProject) + ',');
};

// projectView.initNewProjectPage();
