import { shallowMount, createLocalVue, RouterLinkStub } from '@vue/test-utils'
import Logo from '@/components/Logo.vue'

const localVue = createLocalVue()

describe('Logo', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(Logo, {
      localVue,
      stubs: {
        NuxtLink: RouterLinkStub,
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
})
