// Renders every built page to static HTML so crawlers that don't run JavaScript
// (GPTBot, ClaudeBot, PerplexityBot, and Bing much of the time) see the real
// content instead of an empty <div id="root">.
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const dist = path.join(root, 'dist')
const ssrDir = path.join(root, 'dist-ssr')

const { render } = await import(pathToFileURL(path.join(ssrDir, 'entry-server.js')).href)

const pages = fs.readdirSync(dist).filter(f => f.endsWith('.html') && f !== '404.html')
if (!pages.length) throw new Error('prerender: no html pages in dist')

for (const file of pages) {
  const url = file === 'index.html' ? '/' : '/' + file.replace(/\.html$/, '')
  const filePath = path.join(dist, file)
  const shell = fs.readFileSync(filePath, 'utf8')
  if (!shell.includes('<div id="root"></div>')) throw new Error(`prerender: no empty root div in ${file}`)
  const body = render(url)
  if (body.length < 1000) throw new Error(`prerender: ${url} rendered only ${body.length} chars`)
  fs.writeFileSync(filePath, shell.replace('<div id="root"></div>', `<div id="root">${body}</div>`))
  console.log(`prerendered ${url.padEnd(14)} -> ${file.padEnd(20)} ${Math.round(body.length / 1024)} KB of html`)
}

fs.rmSync(ssrDir, { recursive: true, force: true })
