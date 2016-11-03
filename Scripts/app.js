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
  this.body = (this.body);
  return theTemplate(this);

};

Project.loadAll = function(inputData) {
  inputData.map(function(ele) {
    Project.allProjects.push(new Project(ele));
    // return (new Project);

    // projectInfo.forEach(function(ele) {
    //   projects.push(new Project(ele));
    // });
  });
};

Project.fetchAll = function() {
  if (localStorage.projectInfo) {
    var parsedArticles = JSON.parse(localStorage.projectInfo);
    console.log('projectInfo JSON parsed from local storage');
    Project.loadAll(parsedArticles);
    projectView.renderIndexPage();

  } else {
    console.log('did not find projectInfo in localStorage');
    $.getJSON('/data/projectInfo.json', function(projectInfo) {
      console.log(projectInfo);
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
