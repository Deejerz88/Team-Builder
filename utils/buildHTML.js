const fs = require("fs");
const htmlTemplate = require("../src/htmlTemplate.js");

const buildHTML = (team) => {
  let cardHTML = "";
  const manager = team.Manager;
  const engineers = team.Engineers;
  const interns = team.Interns;
  let cards = [manager.createCard()];
  engineers.forEach((engineer) => {
    cards.push(engineer.createCard());
  });
  interns.forEach((intern) => {
    cards.push(intern.createCard());
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
