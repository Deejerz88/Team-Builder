let inquirer = require("inquirer");
const generatePrompts = require("./utils/generatePrompts.js");
const buildHTML = require("./utils/buildHTML.js");
const MaxLengthInputPrompt = require("inquirer-maxlength-input-prompt");
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");

inquirer.registerPrompt("maxlength-input", MaxLengthInputPrompt);

let team = {
  Manager: {},
  Engineers: [],
  Interns: [],
};

const getInfo = (pos) => {
  let prompts = generatePrompts(pos);
  inquirer.prompt(prompts).then((res) => {
    console.log(res);
    switch (pos) {
      case "Manager":
        team.Manager = new Manager(
          res.name,
          res.id,
          res.email,
          res.desc,
          res.pic,
          res.office
        );
        break;
      case "Engineer":
        team.Engineers.push(
          new Engineer(res.name, res.id, res.email, res.desc, res.pic, res.github)
        );
        break;
      case "Intern":
        team.Interns.push(
          new Intern(res.name, res.id, res.email, res.desc, res.pic, res.school)
        );
        break;
    }
    // if (pos === "Manager") {
    //   team.Manager = new Manager(res.name, res.id,res.email, res.desc,res.office);
    // } else {
    //   team[`${pos}s`].push(new `${pos}`(res.name, res.id, res.email, res.desc));
    // }
    console.log(team);
    console.log(
      "Your Team:",
      "\n Managers:",
      1,
      "\n Engineers:",
      team.Engineers.length,
      "\n Interns:",
      team.Interns.length
    );
    pos = res.next;
    if (pos !== "None") {
      getInfo(pos);
    } else {
      buildHTML(team);
    }
  });
};

getInfo("Manager");
