var projects = [];

function Project (options) {
  this.title = options.title;
  this.body = options.body;
};

Project.prototype.toHtml = function() {

  var templateScript = $('#article-template').html();
  console.log(templateScript);
  var theTemplate = Handlebars.compile(templateScript);
  // var compiledHtml = theTemplate(ourLocalData);
  console.log(this);
  return theTemplate(this);

};

projectInfo.forEach(function(ele) {
  projects.push(new Project(ele));
});

projects.forEach(function(article) {
  $('#projects').append(article.toHtml());
});
