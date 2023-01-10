import { build as viteBuild } from 'vite'
import { remove } from 'fs-extra'
import { execa } from 'execa'
import path from 'path'
import { createSpinner } from 'nanospinner'
import consola from 'consola'

export async function buildTask(option: Record<string, any>) {
  const start = Date.now()
  const __dirname = process.cwd()
  const spinner = createSpinner().start()
  try {
    await remove(path.resolve(__dirname, 'dist'))
    await viteBuild({
      root: __dirname,
      configFile: './vite.config.ts'
    })
    if (!option.declarationType || option.declarationType === 'vue-tsc') {
      await execa('vue-tsc')
    } else await execa('tsc')
    const end = Date.now()
    spinner.success({ text: `build done in ${(end - start) / 1000}s.` })
  } catch (error) {
    spinner.error({ text: 'build failed' })
    throw error
  }
}

export async function build(option: Record<string, any>) {
  try {
    await buildTask(option)
  } catch (error) {
    console.log(error)
    consola.error('Build failed')
  }
}