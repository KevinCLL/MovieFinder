export default ({ store }) => {
  store.dispatch('windowSizeChanged')
  window.onresize = () => {
    store.dispatch('windowSizeChanged')
  }
}
