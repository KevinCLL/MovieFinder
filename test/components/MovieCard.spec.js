/* eslint-disable no-console */
import { shallowMount } from '@vue/test-utils'
import MovieCard from '@/components/MovieCard.vue'
import detailedMovie from '../data/detailedMovie.js'
import cardMovie from '../data/cardMovie.js'

describe('MovieCard', () => {
  let wrapper
  let spy

  beforeEach(() => {
    spy = jest.spyOn(console, 'warn').mockImplementation()
    wrapper = shallowMount(MovieCard, {
      mocks: {
        $axios: {
          $get: () => Promise.resolve(detailedMovie),
        },
      },
      propsData: {
        movie: cardMovie,
      },
      data() {
        return {
          expandedMovie: null,
        }
      },
    })
  })
  afterEach(() => {
    if (wrapper) {
      wrapper.destroy()
    }
    spy.mockRestore()
  })

  test('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  test('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })

  it("ExpandedMovie didn't incorrectly fills", () => {
    const failWrapper = shallowMount(MovieCard, {
      mocks: {
        $axios: {
          $get: () => Promise.reject(new Error('Fake error')),
        },
      },
      propsData: {
        movie: cardMovie,
      },
      data() {
        return {
          expandedMovie: null,
        }
      },
    })
    expect(failWrapper.vm.$data.expandedMovie).toBe(null)
    failWrapper.destroy()
  })

  it('ExpandedMovie fills', () => {
    expect(wrapper.vm.$data.expandedMovie).toBe(detailedMovie)
    expect(spy).not.toBeCalled()
  })
})
