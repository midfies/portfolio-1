'use strict';
var projects = [];

function Project (options) {
  this.title = options.title;
  this.category = options.category;
  this.date = options.date;
  this.projectLink = options.projectLink;
  this.body = options.body;
};
