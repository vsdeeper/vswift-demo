import { Command } from 'commander'
import { cliVersion, cliName } from './index.js'

const program = new Command()

program.name(cliName)
  .version(cliVersion)

program.command('dev')
  .description('run dev server within vswift-epc (For package maintainers only)')
  .action(async () => {
    const { dev } = await import('./commands/dev.js')
    return dev()
  })

program.command('build')
  .description('build for package of vswift-cli, vswift-common or vswift-epc (For package maintainers only)')
  .option('-dt, --declarationType [type]', 'the way to generate declaration file [vue-tsc]')
  .action(async (option: Record<string, any>) => {
    const { build } = await import('./commands/build.js')
    return build(option)
  })

program.command('create')
  .description('create page swiftly based on preset template')
  .option('-t, --template <type>', 'the type of template')
  .option('-d, --dir [path]', 'the directory will create')
  .option('-n, --name [name]', 'the file name that will create')
  .action(async (option: Record<string, any>) => {
    const { create } = await import('./commands/create.js')
    return create(option)
  })

program.parse(process.argv)