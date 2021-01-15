import { shallowMount } from '@vue/test-utils'
import ElementaryCheckmates from '@/components/ElementaryCheckmates.vue'

describe('ElementaryCheckmates.vue', () => {
  it('renders component', () => {
    const wrapper = shallowMount(ElementaryCheckmates);
    expect(wrapper);
  })
})
