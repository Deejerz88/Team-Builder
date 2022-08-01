const generatePrompts = (pos) => {
  console.log('Generating prompts', pos);
  pos = pos || "Manager";
  return [
    {
      type: "input",
      message: `What is the ${pos}'s name?`,
      name: `${pos}.name`,
    },
    {
      type: "input",
      message: `What is the ${pos}'s Employeed ID?`,
      name: `${pos}.id`,
    },
    {
      type: "input",
      message: `What is the ${pos}'s email address?`,
      name: `${pos}.email`,
      validate(input) {
        let valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input);
        if (valid) return true;
        else return "Please enter a valid email address";
      },
    },
    {
      type: "input",
      message: `What is the ${pos}'s Office Number?`,
      name: `${pos}.office`,
      when() {
        if (pos == "Manager") return true;
        else return null;
      },
      validate(input) {
        let valid = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/.test(
          input
        );
        if (valid) return true;
        else return "Please enter a valid phone number";
      },
    },

    {
      type: "input",
      message: `What is the ${pos}'s GitHub Username?`,
      name: `${pos}.github`,
      when() {
        if (pos == "Engineer") return true;
        else return null;
      },
    },
    {
      type: "input",
      message: `What school does the ${pos}'s attend?`,
      name: `${pos}.school`,
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

export default generatePrompts
