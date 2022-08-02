let inquirer = require("inquirer");
const generatePrompts = require("./src/generatePrompts.js");
const buildHTML = require("./src/buildHTML.js");
const MaxLengthInputPrompt = require("inquirer-maxlength-input-prompt");

inquirer.registerPrompt("maxlength-input", MaxLengthInputPrompt);

let team = {
  Manager: {},
  Engineers: [],
  Interns: [],
};

const getInfo = (pos) => {
  let prompts = generatePrompts(pos);
  inquirer.prompt(prompts).then((response) => {
    if (pos === "Manager") {
      team.Manager = response.Manager;
    } else {
      team[`${pos}s`].push(response[`${pos}`]);
    }
    console.log(
      "Your Team:",
      "\n Managers:",
      1,
      "\n Engineers:",
      team.Engineers.length,
      "\n Interns:",
      team.Interns.length
    );
    pos = response.next;
    if (pos !== "None") {
      getInfo(pos);
    } else {
      buildHTML(team);
    }
  });
};

getInfo("Manager");
