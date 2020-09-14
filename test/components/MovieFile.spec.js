import { shallowMount, createLocalVue } from '@vue/test-utils'
import MovieFile from '@/components/MovieFile.vue'
import Vuex from 'vuex'
import storeConfig from '../store-config'
import movie from '../data/detailedMovie.js'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('MovieFile', () => {
  let wrapper
  let store

  beforeEach(() => {
    store = new Vuex.Store(storeConfig)
    wrapper = shallowMount(MovieFile, {
      localVue,
      propsData: {
        movie,
      },
      store,
    })
  })
  afterEach(() => {
    if (wrapper) {
      wrapper.destroy()
    }
  })

  test('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  test('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
