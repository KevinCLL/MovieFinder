export const state = () => ({
  windowWidth: window.innerWidth,
  screenSize: 'large',
})

export const mutations = {
  setWindowWidth(state) {
    const windowWidth = window.innerWidth
    state.windowWidth = windowWidth
    let windowSize = 'large'
    if (windowWidth < 1000) windowSize = 'medium'
    if (windowWidth < 660) windowSize = 'small'
    state.screenSize = windowSize
  },
}

export const actions = {
  windowSizeChanged(context) {
    context.commit('setWindowWidth')
  },
}
