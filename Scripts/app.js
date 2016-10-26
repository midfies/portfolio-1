'use strict';
var projects = [];

function Project (options) {
  this.title = options.title;
  this.category = options.category;
  this.date = options.date;
  this.projectLink = options.projectLink;
  this.body = options.body;
};

Project.prototype.toHtml = function() {
  var $newProject = $('article.template').clone();
  // clones new article template section

// 1. title
// 2. category
// 3. date
// 4. project link
// 5. body

  $newProject.find('h1').text(this.title);
  $newProject.attr('data-category', this.category);

  $newProject.find('section').html(this.body);
  $newProject.find('a:contains("Project")').attr('href', this.projectLink);

  $newProject.removeClass('template');

  return $newProject;
};

projectInfo.forEach(function(ele) {
  projects.push(new Project(ele));
});

projects.forEach(function(article) {
  $('.projects').append(project.toHtml());
});
