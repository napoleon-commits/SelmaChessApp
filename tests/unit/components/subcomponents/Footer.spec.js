import { shallowMount } from '@vue/test-utils'
import Footer from '@/components/subcomponents/Footer.vue'

describe('Footer.vue', () => {
  it('renders component', () => {
    const wrapper = shallowMount(Footer)
    expect(wrapper)
  })
})
