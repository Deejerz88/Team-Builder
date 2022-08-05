const Employee = require( "./Employee.js")

class Manager extends Employee {
  constructor(name, id, email, desc, pic, officeNumber) {
    super(name, id, email, desc, pic);
    this.officeNumber = officeNumber;
    this.officeEl = `<h5 class="id">Office Number: ${this.getOfficeNumber()}</h5>`
  }
  getOfficeNumber() {
    return this.officeNumber;
  }
  getRole() {
    return "Manager";
  }
}

module.exports = Manager;
