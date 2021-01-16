import { shallowMount } from '@vue/test-utils'
import BishopStrategy from '@/components/BishopStrategy.vue'

describe('BishopStrategy.vue', () => {
  it('renders component', () => {
    const wrapper = shallowMount(BishopStrategy);
    expect(wrapper);
  })
})
