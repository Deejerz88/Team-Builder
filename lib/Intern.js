const Employee = require("./Employee.js");

class Intern extends Employee {
  constructor(name, id, email, desc, pic, school) {
    super(name, id, email, desc, pic);
    this.school = school;
    this.schoolEl = `<h5 class="id">School: ${this.getSchool()}</h5>`;
  }
  getSchool() {
    return this.school;
  }
  getRole() {
    return "Intern";
  }
}

module.exports = Intern;
