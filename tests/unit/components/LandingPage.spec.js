import { shallowMount } from '@vue/test-utils'
import LandingPage from '@/components/LandingPage.vue'

describe('LandingPage.vue', () => {
  it('renders component', () => {
    const wrapper = shallowMount(LandingPage);
    expect(wrapper);
  })
})
