import { shallowMount } from '@vue/test-utils'
import PawnStrategy from '@/components/PawnStrategy.vue'

describe('PawnStrategy.vue', () => {
  it('renders component', () => {
    const wrapper = shallowMount(PawnStrategy);
    expect(wrapper);
  })
})
