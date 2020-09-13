import { mount } from '@vue/test-utils'
import Find from '@/pages/find/_title.vue'

describe('Find', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Find)
    expect(wrapper.vm).toBeTruthy()
  })
})
