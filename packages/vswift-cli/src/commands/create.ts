import { mkdirSync, readFileSync, writeFileSync } from 'fs'
import path from 'path'
import { URL, fileURLToPath } from 'url'
import { createSpinner } from 'nanospinner'
import consola from 'consola'

export async function create(option: Record<string, any>) {
  const start = Date.now()
  const spinner = createSpinner('Creating...').start()
  try {
    const __dirname = fileURLToPath(new URL('../', import.meta.url))
    const cwd = process.cwd()
    if (option.template === 'search-list') {
      const fd = readFileSync(path.resolve(__dirname, './templates/SearchList.vue'))
      const str = fd.toString()
      const dir = option.dir ? path.resolve(cwd, option.dir) : cwd
      option.dir && mkdirSync(dir)
      const newFileName = option.name ? path.resolve(dir, option.name) : path.resolve(dir, 'SearchList.vue')
      writeFileSync(newFileName, str)
    }
    const end = Date.now()
    spinner.success({ text: `create done in ${(end - start) / 1000}s.` })
  } catch (error) {
    spinner.error({ text: 'create failed' })
    console.log(error)
    consola.error('Create failed')
  }
}