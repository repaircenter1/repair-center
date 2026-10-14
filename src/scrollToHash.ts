// A card button linking to /gpu-repair#symptoms is a client-side navigation, so
// the browser never jumps to the anchor by itself, and the service pages scroll
// to the top when they open. This handles both cases.
export function scrollToHashOrTop() {
  const id = window.location.hash.slice(1)
  const target = id ? document.getElementById(id) : null
  if (target) target.scrollIntoView({ behavior: 'instant' })
  else window.scrollTo(0, 0)
}
