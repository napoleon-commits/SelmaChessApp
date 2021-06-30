import { shallowMount } from '@vue/test-utils'
import AttackingTheKing from '@/components/AttackingTheKing.vue'

describe('AttackingTheKing.vue', () => {
  it('renders component', () => {
    const wrapper = shallowMount(AttackingTheKing)
    expect(wrapper)
  })
})
