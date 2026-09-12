import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import Sitemap from 'vite-plugin-sitemap'

const SITE = 'https://repair-center.ca'

// GitHub Pages has no SPA fallback: a direct request to /gpu-repair gets 404.html
// with HTTP 404, so search engines treat the page as missing. Emitting
// gpu-repair.html next to index.html makes Pages serve /gpu-repair with 200.
// Keep title/description in sync with the page's useEffect.
const staticRoutes = [
  {
    path: 'gpu-repair',
    title: 'GPU Repair in Lethbridge, Canada | NVIDIA RTX & AMD RX — Repair Center',
    description: 'No display, artifacting, Error 43, VRAM failure — we fix it. Component-level GPU repair in Lethbridge. Free diagnostics. Mail-in from anywhere in Canada.',
  },
]

const escapeHtml = (s: string) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')

function staticRoutePages(): Plugin {
  return {
    name: 'static-route-pages',
    apply: 'build',
    enforce: 'post',
    generateBundle(_, bundle) {
      const index = bundle['index.html']
      if (!index || index.type !== 'asset') throw new Error('static-route-pages: index.html not found in bundle')
      const html = typeof index.source === 'string' ? index.source : new TextDecoder().decode(index.source)
      for (const route of staticRoutes) {
        const url = `${SITE}/${route.path}`
        const title = escapeHtml(route.title)
        const description = escapeHtml(route.description)
        let page = html
        const set = (re: RegExp, value: string) => {
          if (!re.test(page)) throw new Error(`static-route-pages: ${re} not found in index.html`)
          page = page.replace(re, (_m, before: string) => before + value)
        }
        set(/(<title>)[^<]*/, title)
        set(/(<meta name="description" content=")[^"]*/, description)
        set(/(<link rel="canonical" href=")[^"]*/, url)
        set(/(<meta property="og:title" content=")[^"]*/, title)
        set(/(<meta property="og:description" content=")[^"]*/, description)
        set(/(<meta property="og:url" content=")[^"]*/, url)
        // The home-page FAQ isn't shown on service pages, so drop its FAQPage markup.
        page = page.replace(/\s*<script type="application\/ld\+json">\s*\{\s*"@context": "https:\/\/schema\.org",\s*"@type": "FAQPage"[\s\S]*?<\/script>/, '')
        this.emitFile({ type: 'asset', fileName: `${route.path}.html`, source: page })
      }
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    staticRoutePages(),
    Sitemap({
      hostname: SITE,
      // routes come from the emitted .html files; 404.html is not a real page
      exclude: ['/404'],
    }),
  ],
  base: '/',
})
