const pageOrder = ['/', '/catalog', '/reviews', '/how-to-order', '/contacts', '/admin']

export default defineNuxtRouteMiddleware((to, from) => {
  const toPath = to.path.replace(/\/$/, '') || '/'
  const fromPath = from.path.replace(/\/$/, '') || '/'
  const toIndex = pageOrder.indexOf(toPath.startsWith('/products/') ? '/catalog' : toPath)
  const fromIndex = pageOrder.indexOf(fromPath.startsWith('/products/') ? '/catalog' : fromPath)
  const isBackward = (toIndex !== -1 && fromIndex !== -1 && toIndex < fromIndex)
    || (fromPath.startsWith('/products/') && toPath === '/catalog')
  const transition = {
    name: isBackward ? 'page-slide-backward' : 'page-slide-forward',
    mode: 'default' as const,
  }

  to.meta.pageTransition = transition
  from.meta.pageTransition = transition
})
