import chalk from "chalk";
import gradient from "gradient-string";
import inquirer from "inquirer";
import ora from "ora";

const frameworks = [
  {
    name: chalk.yellowBright('vanilla'), value: 'vanilla'
  },
  {
    name: chalk.blueBright('react'), value: 'react'
  },
  {
    name: chalk.greenBright('vue'), value: 'vue'
  },
  {
    name: chalk.redBright('astro'), value: 'astro'
  }
]

const variants = [
  { name: chalk.blue('TypeScript'), value: 'TypeScript' },
  { name: chalk.yellow('JavaScript'), value: 'JavaScript' }
]


export const create = async (options) => {
  console.log(chalk.greenBright('Create a new project'));

  const questions = []

  if (!options.name) {
    questions.push({
      name: 'name',
      message: 'Project name:',
      type: 'input',
      default: 'nkoal-project'
    })
  }
  questions.push({
    name: 'framework',
    message: 'Select a framework:',
    type: 'list',
    choices: frameworks
  }, {
    name: 'variant',
    message: 'Select a Varian:',
    type: 'list',
    choices: variants
  }, {
    name: 'designSystem',
    message: 'Select design system',
    type: 'list',
    choices: [
      { name: 'none', value: 'none' },
      { name: 'park-ui', value: 'parkui' },
      { name: 'daisy-ui', value: 'daisyui' },
      { name: 'ripple-ui', value: 'rippleui' },
      { name: 'hyper-ui', value: 'hyperui' }
    ]
  })

  const answers = await inquirer.prompt(questions)

  // console.log({
  //   projectName: options.name || answers.name,
  //   framework: answers.framework,
  //   variant: answers.variant
  // });

  const roller = ora('🔥 cooking the project...').start()

  setTimeout(() => {
    roller.succeed()
  }, 2000);
}