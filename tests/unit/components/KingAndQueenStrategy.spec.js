import { shallowMount } from '@vue/test-utils'
import KingAndQueenStrategy from '@/components/KingAndQueenStrategy.vue'

describe('KingAndQueenStrategy.vue', () => {
  it('renders component', () => {
    const wrapper = shallowMount(KingAndQueenStrategy);
    expect(wrapper);
  })
})
