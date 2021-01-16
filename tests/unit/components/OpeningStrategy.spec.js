import { shallowMount } from '@vue/test-utils'
import OpeningStrategy from '@/components/OpeningStrategy.vue'

describe('OpeningStrategy.vue', () => {
  it('renders component', () => {
    const wrapper = shallowMount(OpeningStrategy);
    expect(wrapper);
  })
})
