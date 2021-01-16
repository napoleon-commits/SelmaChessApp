import { shallowMount } from '@vue/test-utils'
import RookStrategy from '@/components/RookStrategy.vue'

describe('RookStrategy.vue', () => {
  it('renders component', () => {
    const wrapper = shallowMount(RookStrategy);
    expect(wrapper);
  })
})
