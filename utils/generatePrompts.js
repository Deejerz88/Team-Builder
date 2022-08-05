const generatePrompts = (pos) => {
  console.log("Generating prompts", pos);
  return [
    {
      type: "input",
      message: `What is the ${pos}'s name?`,
      name: `name`,
    },
    {
      type: "input",
      message: `What is the ${pos}'s Employeed ID?`,
      name: "id",
    },
    {
      type: "input",
      message: `What is the ${pos}'s email address?`,
      name: "email",
      validate(input) {
        let valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input);
        if (valid) return true;
        else return "Please enter a valid email address";
      },
    },
    {
      type: "maxlength-input",
      message: `Describe this ${pos} in 160 characters or less.`,
      name: "desc",
      maxLength: 160,
    },
    {
      type: "input",
      message: `Add a picture for the ${pos}`,
      name: "pic",
    },
    {
      type: "input",
      message: `What is the ${pos}'s Office Number?`,
      name: "office",
      when() {
        if (pos == "Manager") return true;
        else return null;
      },
      validate(input) {
        let valid = !isNaN(input);
        if (valid) return true;
        else return "Please enter a valid Office Number";
      },
    },

    {
      type: "input",
      message: `What is the ${pos}'s GitHub Username?`,
      name: "github",
      when() {
        if (pos == "Engineer") return true;
        else return null;
      },
    },
    {
      type: "input",
      message: `What school does the ${pos}'s attend?`,
      name: "school",
      when() {
        if (pos == "Intern") return true;
        else return null;
      },
    },
    {
      type: "list",
      message: `What type of Team Member would you like to add next?`,
      name: "next",
      choices: ["Engineer", "Intern", "None"],
    },
  ];
};

module.exports = generatePrompts;
