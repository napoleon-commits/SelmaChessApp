import { shallowMount } from '@vue/test-utils'
import Navbar from '@/components/subcomponents/Navbar.vue'
import Vuetify from 'vuetify'

describe('Navbar.vue', () => {
  it('renders component', () => {
    const wrapper = shallowMount(Navbar, {
      vuetify: new Vuetify({
        breakpoint: {
          mobileBreakpoint: 'sm'
        }
      })
    })
    expect(wrapper)
  })
})
