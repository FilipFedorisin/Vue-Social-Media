export default function ({ store, route, redirect }) {
  const user = store.state.user
  const blockedRoute = /\/user(\s|\/)(?!signin|signup)/g
  // Regex blocks all routes starting with /user except signin/signup if user is not authorized
  if ((!user && route.path.match(blockedRoute)) || (!user && route.path === '/user')) {
    redirect('/')
  }
}
