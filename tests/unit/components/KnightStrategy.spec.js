import { shallowMount } from '@vue/test-utils'
import KnightStrategy from '@/components/KnightStrategy.vue'

describe('KnightStrategy.vue', () => {
  it('renders component', () => {
    const wrapper = shallowMount(KnightStrategy);
    expect(wrapper);
  })
})
