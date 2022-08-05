class Employee {
  constructor(name, id, email, desc, pic) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.desc =
      desc ||
      "Commodo aliqua voluptate aliqua ipsum voluptate cillum eiusmod officia qui labore labore consectetur sit anim. Commodo aliqua voluptate aliqua ipsum voluptate.";
    this.pic = pic;
  }
  getName() {
    return this.name;
  }
  getId() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }
  getRole() {
    return "Employee";
  }
  getDesc() {
    return this.desc;
  }
  getPic() {  return this.pic; }
  createCard() {
    return `<div class="col-xs-6 col-sm-4 col-md-3 i">
            <div class="c text-center">
              <div class="wrap">
                <img
                  src="../${this.getPic()}"
                  alt="#"
                  width="300"
                  height="300"
                  class="img-responsive"
                />
                <div class="info">
                  <h3 class="name">${this.getName()}</h3>
                  <h4 class="position">${this.getRole()}</h4>
                  <h5 class="id">Employee ID: ${this.getId()}</h5>
                  ${this.officeEl || ""}
                  ${this.schoolEl || ""}
                </div>
              </div>
                <p class="desc">${this.getDesc()}</p>
              <div class="more">
                <div class="socials">
                  <a href="mailto:${this.getEmail()}" title="${this.getEmail()}" class="email">
                    <i class="fa-solid fa-envelope"></i>
                  </a>
                  ${this.githubIcon || ""}
                  </a>
                </div>
              </div>
            </div>
          </div>`;
  }
}

module.exports = Employee;
