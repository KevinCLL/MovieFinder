import { mount } from '@vue/test-utils'
import MovieFile from '@/components/MovieFile.vue'

describe('MovieFile', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(MovieFile)
    expect(wrapper.vm).toBeTruthy()
  })
})
