#!/usr/bin/env node
import { program } from 'commander'
import chalk from 'chalk'
import gradient from 'gradient-string'
import { create } from '../src/commands/create.js'

const description = `Comprehensive suite of commands to ${chalk.white('create')}, ${chalk.white('manage')}, and ${chalk.white('improve')} your ${chalk.greenBright('vite pocketbase')} project.`

program.name(chalk.green('nkoal')).version('0.1.0').description(chalk.gray(description)).usage(chalk.yellowBright('[global options]') + ' ' + chalk.cyan('[command]'))

console.log(gradient('purple', 'cyan')('Nkoal Tool v0.1.0'))
console.log(gradient('purple', 'cyan')('.................'))

program
  .command('create')
  .description('create a new project with your custom configuration')
  .option('-n, --name <name>', 'configure a project name')
  .option('-tw --tailwind', 'add tailwind (component library add tailwind by default)')
  .action((options) => create(options))

program.parse(process.argv)

if (!process.argv.slice(2).length) {
  program.outputHelp();
}