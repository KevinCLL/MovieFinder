import { mount, createLocalVue } from '@vue/test-utils'
import Searchbox from '@/components/Searchbox.vue'
import VueRouter from 'vue-router'

const localVue = createLocalVue()
localVue.use(VueRouter)

describe('Searchbox', () => {
  let wrapper
  let router

  beforeEach(() => {
    router = new VueRouter()
    wrapper = mount(Searchbox, {
      localVue,
      router,
      data() {
        return {
          movie: 'Batman',
        }
      },
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

  test('placeholder for / is correct', () => {
    expect(wrapper.find('#searchbox').attributes().placeholder).toEqual(
      'Find me a movie'
    )
  })

  test('All other placeholder are correct', () => {
    const batWrapper = mount(Searchbox, {
      mocks: {
        $route: '/find/Batman',
      },
    })
    expect(batWrapper.find('#searchbox').attributes().placeholder).toEqual(
      'Find me another movie'
    )
    batWrapper.destroy()
  })

  test('button is disabled', () => {
    expect(wrapper.find('#searchbutton').attributes('disabled')).toBeFalsy()
    const noMovieWrapper = mount(Searchbox, {
      localVue,
      router,
      data() {
        return {
          movie: '',
        }
      },
    })
    expect(
      noMovieWrapper.find('#searchbutton').attributes('disabled')
    ).toBeTruthy()
    noMovieWrapper.destroy()
  })

  test('should go to Batman page', () => {
    wrapper.find('#searchbutton').trigger('click')
    expect(wrapper.vm.$route.path).toBe('/find/Batman')
  })
})
