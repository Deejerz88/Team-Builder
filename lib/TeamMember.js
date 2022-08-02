class TeamMember {
  constructor(member, pos) {
    this.name = member.name;
    this.id = member.id;
    this.email = member.email;
    this.pos = pos;
    this.desc =
      member.desc ||
      "Commodo aliqua voluptate aliqua ipsum voluptate cillum eiusmod officia qui labore labore consectetur sit anim. Commodo aliqua voluptate aliqua ipsum voluptate.";
    if (pos === "Manager") this.office = member.office;
    else if (pos === "Engineer") this.github = member.github;
    else this.school = member.school;
  }
  createCard() {
    let github = ''
    if (this.github) {
      github = `<a href="https://www.github.com/${this.github}" target="_blank" rel="noreferrer noopener" title="GitHub" class="linkedin"><i class="fa-brands fa-github"></i>`;
    }
    return `<div class="col-xs-6 col-sm-4 col-md-3 i">
            <div class="c text-center">
              <div class="wrap">
                <img
                  src="https://bootdey.com/img/Content/avatar/avatar1.png"
                  alt="#"
                  width="300"
                  height="300"
                  class="img-responsive"
                />
                <div class="info">
                  <h3 class="name">${this.name}</h3>
                  <h4 class="position">${this.pos}</h4>
                  <h5 class="id">Employee ID: ${this.id}</h5>
                </div>
              </div>
                <p class="desc">${this.desc}</p>

              <div class="more">
                <div class="socials">
                  <a href="mailto:${this.email}" title="${this.email}" class="email">
                    <i class="fa-solid fa-envelope"></i>
                  </a>
                  ${github}
                  </a>
                </div>
              </div>
            </div>
          </div>`;
  }
}

module.exports = TeamMember;
