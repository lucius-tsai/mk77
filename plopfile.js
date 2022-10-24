"use strict";
const path = require("path");

module.exports = function (plop) {
  // starting prompt can be customized to display what you want
  // plop.setWelcomeMessage('[CUSTOM]'.yellow + ' What can I do for you?');

  // helpers are passed through handlebars syntax and made
  // available for use in the generator templates

  // adds 4 dashes around some text (yes es6/es2015 is supported)
  plop.addHelper("dashAround", (text) => "---- " + text + " ----");

  // formats an array of options like you would write
  // it, if you were speaking (one, two, and three)
  plop.addHelper("wordJoin", function (words) {
    return words.join(", ").replace(/(:?.*),/, "$1, and");
  });

  plop.addHelper("absPath", function (p) {
    return path.resolve(plop.getPlopfilePath(), p);
  });

  // greet the user using a partial
  plop.addPartial(
    "salutation",
    "{{ greeting }}, my name is {{ properCase name }} and I am {{ age }}."
  );

  // load some additional helpers from a module installed using npm
  plop.load("plop-pack-fancy-comments", {
    prefix: "",
    upperCaseHeaders: true,
    commentStart: "",
    commentEnd: "",
  });

  // adding a custom inquirer prompt type
  plop.addPrompt("directory", require("inquirer-directory"));

  // setGenerator creates a generator that can be run with "plop generatorName"
  plop.setGenerator("React Component", {
    description: "Generate a empty component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is component name?",
        validate: function (value) {
          if (/.+/.test(value)) {
            return true;
          }
          return "Name is required";
        },
      },
      {
        type: "input",
        name: "category",
        message: "What is Category?",
        validate: function (value) {
          if (/.+/.test(value)) {
            return true;
          }
          return "Category is required";
        },
      },
      {
        type: "checkbox",
        name: "modules",
        message: "What modules you want to load?",
        choices: [
          { name: "Styles", value: "STYLES", checked: true },
          { name: "Storybook", value: "STORYBOOK", checked: true },
          { name: "Test", value: "TEST", checked: true },
        ],
      },
      {
        type: "directory",
        name: "path",
        message: "Where u want to create?",
        basePath: plop.getPlopfilePath(),
      },
    ],
    actions: function (data) {
      let actions = [
        {
          type: "add",
          path: "{{absPath path}}/{{snakeCase name}}/{{snakeCase name}}.tsx",
          templateFile:
            ".plop_templates/react_component/react_component.tsx.plop",
          abortOnFail: true,
        },
        {
          type: "add",
          path: "{{absPath path}}/{{snakeCase name}}/{{snakeCase name}}.types.ts",
          templateFile:
            ".plop_templates/react_component/react_component.types.ts.plop",
          abortOnFail: true,
        },
        {
          type: "add",
          path: "{{absPath path}}/{{snakeCase name}}/package.json",
          templateFile: ".plop_templates/react_component/package.json.plop",
          abortOnFail: true,
        },
      ];
      if (data.modules.includes("STYLES")) {
        actions.push({
          type: "add",
          path: "{{absPath path}}/{{snakeCase name}}/{{snakeCase name}}.module.scss",
          templateFile:
            ".plop_templates/react_component/react_component.module.scss.plop",
        });
      }

      if (data.modules.includes("STORYBOOK")) {
        actions.push({
          type: "add",
          path: "{{absPath path}}/{{snakeCase name}}/_stories/{{snakeCase name}}.stories.mdx",
          templateFile:
            ".plop_templates/react_component/_stories/react_component.stories.mdx.plop",
        });
        actions.push({
          type: "add",
          path: "{{absPath path}}/{{snakeCase name}}/_stories/{{snakeCase name}}.stories.jsx",
          templateFile:
            ".plop_templates/react_component/_stories/react_component.stories.js.plop",
        });
        actions.push({
          type: "add",
          path: "{{absPath path}}/{{snakeCase name}}/_stories/{{snakeCase name}}_const.js",
          templateFile:
            ".plop_templates/react_component/_stories/const.js.plop",
        });
        actions.push({
          type: "add",
          path: "{{absPath path}}/{{snakeCase name}}/_stories/_examples/1_basic_{{snakeCase name}}.examples.tsx",
          templateFile:
            ".plop_templates/react_component/_stories/_examples/1_basic_component.example.tsx.plop",
        });
        actions.push({
          type: "add",
          path: "{{absPath path}}/{{snakeCase name}}/_stories/_examples/index.examples.tsx",
          templateFile:
            ".plop_templates/react_component/_stories/_examples/index.examples.tsx.plop",
        });
      }
      if (data.modules.includes("TEST")) {
        actions.push({
          type: "add",
          path: "{{absPath path}}/{{snakeCase name}}/{{snakeCase name}}.test.js",
          templateFile:
            ".plop_templates/react_component/react_component.test.js.plop",
        });
      }
      return actions;
    },
  });

  // adding a custom inquirer prompt type
  plop.addPrompt("directory", require("inquirer-directory"));

  // setGenerator creates a generator that can be run with "plop generatorName"
  plop.setGenerator("Just Storybook", {
    description: "Generate a empty component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is component name?",
        validate: function (value) {
          if (/.+/.test(value)) {
            return true;
          }
          return "name is required";
        },
      },
      {
        type: "directory",
        name: "path",
        message: "Where u want to create?",
        basePath: plop.getPlopfilePath(),
      },
    ],
    actions: function (data) {
      let actions = [
        {
          type: "add",
          path: "{{absPath path}}/{{snakeCase name}}.stories.js",
          templateFile:
            ".plop_templates/react_component/react_component.stories.js",
        },
      ];

      return actions;
    },
  });

  // adding a custom inquirer prompt type
  plop.addPrompt("directory", require("inquirer-directory"));

  plop.setGenerator("Give me a helper", {
    description: "custom inquirer prompt example",
    prompts: [
      {
        type: "rawlist",
        name: "helperType",
        message: "Type of helper u want to create?",
        choices: [
          { name: "Service", value: "SERVICE", checked: true },
          { name: "Const", value: "CONST", checked: true },
        ],
      },
      {
        type: "input",
        name: "fileName",
        message: "Pick a helper name:",
        validate: function (value) {
          if (/.+/.test(value)) {
            return true;
          }
          return "file helper is required";
        },
      },

      {
        type: "directory",
        name: "path",
        message: "Where u want to create?",
        basePath: plop.getPlopfilePath(),
      },
    ],
    actions: function (data) {
      const actions = [
        {
          type: "add",
          path: "{{absPath path}}/{{snakeCase fileName}}/package.json",
          templateFile: ".plop_templates/helpers/package.json",
          abortOnFail: true,
        },
      ];
      if (data.helperType === "SERVICE") {
        actions.push({
          type: "add",
          path: "{{absPath path}}/{{snakeCase fileName}}/{{snakeCase fileName}}_service.js",
          templateFile: ".plop_templates/helpers/service.js",
        });
      }
      if (data.helperType === "CONST") {
        actions.push({
          type: "add",
          path: "{{absPath path}}/{{snakeCase fileName}}/{{snakeCase fileName}}_const.js",
          templateFile: ".plop_templates/helpers/const.js",
        });
      }
      return actions;
    },
  });

  plop.addPrompt("directory", require("inquirer-directory"));

  // test with dynamic actions, regarding responses to prompts
  plop.setGenerator("Create a redux", {
    description: "create a redux starter",
    prompts: [
      {
        type: "input",
        name: "reduxName",
        message: "Pick a redux name:",
        validate: function (value) {
          if (/.+/.test(value)) {
            return true;
          }
          return "file helper is required";
        },
      },

      {
        type: "directory",
        name: "path",
        message: "Where u want to create?",
        basePath: plop.getPlopfilePath(),
      },
    ],
    actions: function (data) {
      const actions = [
        {
          type: "add",
          path: "{{absPath path}}/_{{snakeCase reduxName}}_redux/package.json",
          templateFile: ".plop_templates/redux/package.json",
          abortOnFail: true,
        },
        {
          type: "add",
          path: "{{absPath path}}/_{{snakeCase reduxName}}_redux/{{snakeCase reduxName}}_redux.js",
          templateFile: ".plop_templates/redux/redux_name_redux.js",
        },
        {
          type: "add",
          path: "{{absPath path}}/_{{snakeCase reduxName}}_redux/{{snakeCase reduxName}}_api.js",
          templateFile: ".plop_templates/redux/redux_name_api.js",
        },
      ];

      return actions;
    },
  });
};
