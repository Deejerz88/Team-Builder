const TeamMember = require("../lib/TeamMember.js");
const fs = require("fs");
const htmlTemplate = require("./htmlTemplate.js");

// const team = {
//   Manager: {
//     name: "DJ",
//     id: "123",
//     email: "dj@p.com",
//     desc: "Pretty Cool Guy",
//     office: "1234567890",
//   },
//   Engineers: [
//     {
//       name: "Spenc",
//       id: "321",
//       email: "s@p.com",
//       github: "SpenceBaby",
//     },
//     { name: "Ryan", id: "321", email: "r@p.com", github: "RyBaby" },
//   ],
//   Interns: [{ name: "Tasha", id: "987", email: "tash@p.com", school: "Life" }],
// };

const buildHTML = (team) => {
  let cardHTML = "";
  const manager = team.Manager;
  const engineers = team.Engineers;
  const interns = team.Interns;
  let cards = [new TeamMember(manager, "Manager").createCard()];
  engineers.forEach((engineer) => {
    const engineerCard = new TeamMember(engineer, "Engineer");
    cards.push(engineerCard.createCard());
  });
  interns.forEach((intern) => {
    const internCard = new TeamMember(intern, "Intern");
    cards.push(internCard.createCard());
  });
  cards.forEach((card) => {
    cardHTML += card;
  });
  const html = htmlTemplate.replace("<!-- cards -->", cardHTML);
  fs.writeFile("dist/index.html", html, (err) =>
    err ? err : console.log("successfully created HTML")
  );
};

module.exports = buildHTML;
