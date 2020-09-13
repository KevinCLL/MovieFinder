import { mount } from '@vue/test-utils'
import MovieCard from '@/components/MovieCard.vue'

describe('MovieCard', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(MovieCard)
    expect(wrapper.vm).toBeTruthy()
  })
})
