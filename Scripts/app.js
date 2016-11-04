

function Project (options) {
  for (var keys in options) {
    this[keys] = options[keys];
  }
}

Project.allProjects = [];

Project.prototype.toHtml = function(templateScript) {

  var theTemplate = Handlebars.compile($(templateScript).text());
  this.body = (this.body);
  return theTemplate(this);

};

Project.loadAll = function(inputData) {
  inputData.forEach(function(ele) {
    Project.allProjects.push(new Project(ele));

  });
};

Project.fetchAll = function(renderStats) {
  if (localStorage.projectInfo) {
    var parsedArticles = JSON.parse(localStorage.projectInfo);
    // console.log('projectInfo JSON parsed from local storage');
    Project.loadAll(parsedArticles);
    projectView.renderIndexPage();
    renderStats();

  } else {
    // console.log('did not find projectInfo in localStorage');
    $.getJSON('/data/projectInfo.json', function(projectInfo) {
      console.log(projectInfo);
      Project.loadAll(projectInfo);
      localStorage.setItem('projectInfo', JSON.stringify(projectInfo));
      projectView.renderIndexPage();
      renderStats();
    });
  }
};

Project.wordCount = function() {
  return Project.allProjects.map(function(project) {

    return project.body.split(' ').length;
  })
    .reduce(function(cur, next) {
      return cur + next;

    });
};


Project.renderAllStats = function() {
  $('#project-stats .words').text(Project.wordCount());
  console.log(Project.wordCount());

};
