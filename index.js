import inquirer from "inquirer";
import generatePrompts from "./lib/generatePrompts.js";
import buildHTML from "./lib/buildHTML.js";

let team = {
  Manager: {},
  Engineers: [],
  Interns: [],
};
let pos = "Manager";

const getInfo = () => {
  let prompts = generatePrompts(pos);
  inquirer.prompt(prompts).then((response) => {
    if (pos === "Manager") {
      team.Manager = response.Manager;
    } else {
      team[`${pos}s`].push(response[`${pos}`]);
    }
    console.log(response);
    console.log(team);
    pos = response.next;
    if (pos !== "None") {
      getInfo();
    } else {
      buildHTML(team);
    }
  });
};

// inquirer.prompt(prompts).then((response) => {
//   console.log(response);
//   pos = response.next;
//   prompts = generatePrompts(pos);
// });

getInfo();
