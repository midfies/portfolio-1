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

Project.wordCount = function() {
  return Project.allProjects.map(function(project) {
  //Grab the word count from each project body.
    console.log(project.body.split(' ').length);
    return project.body.split(' ').length;
  })

    .reduce(function(prev, next) {

      return prev + next;
    });
};
Project.renderAllStats = function() {
  var statsRender = Handlebars.compile($('#stats-template').html());
  $('#project-stats .projects').text(Project.allProjects.length);


  $('#project-stats .words').text(Project.wordCount());

  Project.wordCount().forEach(function(wordCountObj) {
    $('#project-stats').append(statsRender(wordCountObj));
  });

};

// Project.fetchAll(Project.renderAllStats);
