import { mount } from '@vue/test-utils'
import Searchbox from '@/components/Searchbox.vue'

describe('Searchbox', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Searchbox)
    expect(wrapper.vm).toBeTruthy()
  })
})
