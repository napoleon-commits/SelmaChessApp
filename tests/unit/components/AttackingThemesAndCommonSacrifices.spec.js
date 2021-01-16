import { shallowMount } from '@vue/test-utils'
import AttackingThemesAndCommonSacrifices from '@/components/AttackingThemesAndCommonSacrifices.vue'

describe('AttackingThemesAndCommonSacrifices.vue', () => {
  it('renders component', () => {
    const wrapper = shallowMount(AttackingThemesAndCommonSacrifices);
    expect(wrapper);
  })
})
