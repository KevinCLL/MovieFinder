import { mount, createLocalVue } from '@vue/test-utils'
import Find from '@/pages/find/_title.vue'
import MovieCard from '@/components/MovieCard.vue'
import MovieFile from '@/components/MovieFile.vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import VueMeta from 'vue-meta'
import storeConfig from '../store-config'
import detailedMovie from '../data/detailedMovie.js'
import littleDetailsMovie from '../data/littleDetailsMovie.js'
import { good, oneMovie, noMovies } from '../data/movieResults.js'

const localVue = createLocalVue()
localVue.use(VueMeta, { keyName: 'head' })
localVue.use(VueRouter)
localVue.use(Vuex)
localVue.component('movie-card', MovieCard)
localVue.component('movie-file', MovieFile)

describe('Find', () => {
  let wrapper
  let store
  let router

  beforeEach(() => {
    store = new Vuex.Store(storeConfig)
    router = new VueRouter({
      routes: [{ path: '/find/:title', component: Find }],
    })
    router.push('/find/Batman')
    wrapper = mount(Find, {
      localVue,
      mocks: {
        $axios: {
          $get: () => Promise.resolve(detailedMovie),
        },
        $scrollTo: jest.fn(),
      },
      data() {
        return {
          movies: good,
          selectedMovie: null,
          showDetails: false,
        }
      },
      store,
      router,
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

  test('has correct <head> content', () => {
    expect(wrapper.vm.$metaInfo.title).toBe('Movie Finder - Batman')
    const descriptionMeta = wrapper.vm.$metaInfo.meta.find(
      (item) => item.hid === 'description'
    )
    expect(descriptionMeta.content).toBe(
      "Not the best movie finder, but maybe it's good enough."
    )
    const noMoviesWrapper = mount(Find, {
      localVue,
      mocks: {
        $axios: {
          $get: () => Promise.resolve(detailedMovie),
        },
      },
      data() {
        return {
          movies: noMovies,
          selectedMovie: null,
          showDetails: false,
        }
      },
      store,
      router,
    })
    expect(noMoviesWrapper.vm.$metaInfo.title).toBe(
      "Movie Finder - Looks like it didn't find it"
    )
    noMoviesWrapper.destroy()
  })

  test('changes selected movie', () => {
    expect(wrapper.vm.$data.selectedMovie).toBe(null)
    wrapper.findAll('.movie-card-glass').at(1).trigger('click')
    expect(wrapper.vm.$data.selectedMovie).toBe(detailedMovie)
  })

  test('closes movie details', async () => {
    wrapper.findAll('.movie-card-glass').at(1).trigger('click')
    expect(wrapper.vm.$data.showDetails).toBe(true)
    await localVue.nextTick()
    wrapper.find('#movieclose').trigger('click')
    expect(wrapper.vm.$data.showDetails).toBe(false)
  })

  test('shows less cards if not enough movies', () => {
    const oneMovieWrapper = mount(Find, {
      localVue,
      mocks: {
        $axios: {
          $get: () => Promise.resolve(littleDetailsMovie),
        },
      },
      data() {
        return {
          movies: oneMovie,
          selectedMovie: null,
          showDetails: false,
        }
      },
      store: new Vuex.Store({
        state: {
          windowWidth: 777,
          screenSize: 'medium',
        },
      }),
      router,
    })
    expect(oneMovieWrapper.vm.cardsPerPage).toBe(1)
    oneMovieWrapper.destroy()
  })

  test("shows poster template if didn't has any poster", () => {
    const oneMovieWrapper = mount(Find, {
      localVue,
      mocks: {
        $axios: {
          $get: () => Promise.resolve(littleDetailsMovie),
        },
      },
      data() {
        return {
          movies: oneMovie,
          selectedMovie: null,
          showDetails: false,
        }
      },
      store,
      router,
    })
    expect(oneMovieWrapper.findAll('.no-poster').at(0).text()).toBe(
      'Poster not found'
    )
    oneMovieWrapper.destroy()
  })

  test("says sorry if didn't find any movie", () => {
    const noMoviesWrapper = mount(Find, {
      localVue,
      mocks: {
        $axios: {
          $get: () => Promise.resolve(detailedMovie),
        },
      },
      data() {
        return {
          movies: noMovies,
          selectedMovie: null,
          showDetails: false,
        }
      },
      store,
      router,
    })
    expect(noMoviesWrapper.find('#sorry').text()).toBe(
      'Sorry, but I have not found any movie with that name'
    )
    noMoviesWrapper.destroy()
  })
})
