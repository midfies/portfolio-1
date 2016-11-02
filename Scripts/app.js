// var projects = [];
//
// function Project (options) {
//   this.title = options.title;
//   this.body = options.body;
// };

function Project (options) {
  for (var keys in options) {
    this[keys] = options[keys];
  }
}

Project.allProjects = [];

Project.prototype.toHtml = function(templateScript) {

  // var templateScript = $('#article-template').html();
  // console.log(templateScript);
  var theTemplate = Handlebars.compile($(templateScript).text());

  // console.log(this);
  this.body = marked(this.body);
  return theTemplate(this);

};

Project.loadAll = function(inputData) {
  inputData.forEach(function(ele) {
    Project.allProjects.push(new Project(ele));
    // return (new Project);
  });
};

Project.fetchAll = function() {
  if (localStorage.projectInfo) {
    var parsedArticles = JSON.parse(localStorage.projectInfo);
    console.log('projectInfo JSON parsed from local storage');
    Project.loadAll(parsedArticles);
    projectView.renderIndexPage();
    /* When our data is already in localStorage:
    1. We can process and load it,
    2. Then we can render the index page.  */
  } else {
    console.log('did not find projectInfo in localStorage');
    $.getJSON('data/projectInfo.json', function(projectInfo) {
      Project.loadAll(projectInfo);
      localStorage.setItem('projectInfo', JSON.stringify(projectInfo));
      projectView.renderIndexPage();

    });
  }
};
// projectInfo.forEach(function(ele) {
//   projects.push(new Project(ele));
// });
//
// projects.forEach(function(article) {
//   $('#projects').append(article.toHtml());
// });
