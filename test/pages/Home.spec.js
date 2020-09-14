import { mount, createLocalVue } from '@vue/test-utils'
import VueMeta from 'vue-meta'
import Home from '@/pages/index.vue'

const localVue = createLocalVue()
localVue.use(VueMeta, { keyName: 'head' })

describe('Home', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(Home, {
      localVue,
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
    expect(wrapper.vm.$metaInfo.title).toBe('Movie Finder - I hope it finds it')
    const descriptionMeta = wrapper.vm.$metaInfo.meta.find(
      (item) => item.hid === 'description'
    )
    expect(descriptionMeta.content).toBe(
      "Not the best movie finder, but maybe it's good enough."
    )
  })
})
