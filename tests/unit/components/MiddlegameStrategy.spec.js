import { shallowMount } from '@vue/test-utils'
import MiddlegameStrategy from '@/components/MiddlegameStrategy.vue'

describe('MiddlegameStrategy.vue', () => {
  it('renders component', () => {
    const wrapper = shallowMount(MiddlegameStrategy);
    expect(wrapper);
  })
})
