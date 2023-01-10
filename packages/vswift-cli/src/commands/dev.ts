import { createServer } from 'vite'

export async function dev() {
  const server = await createServer({
    root: process.cwd(),
    configFile: './vite.config.ts',
    server: {
      port: 1314
    }
  })
  await server.listen()
  server.printUrls()
}