import { shallowMount } from '@vue/test-utils'
import OpeningVariations from '@/components/OpeningVariations.vue'

describe('OpeningVariations.vue', () => {
  it('renders component', () => {
    const wrapper = shallowMount(OpeningVariations);
    expect(wrapper);
  })
})
