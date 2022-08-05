const Employee = require("./Employee.js");

class Engineer extends Employee {
  constructor(name, id, email, desc, pic, github) {
    super(name, id, email, desc, pic);
    this.github = github;
    this.githubIcon = `<a href="https://www.github.com/${this.getGithub()}" target="_blank" rel="noreferrer noopener" title="GitHub" class="linkedin"><i class="fa-brands fa-github"></i>`;
  }
  getGithub() {
    return this.github;
  }
  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
