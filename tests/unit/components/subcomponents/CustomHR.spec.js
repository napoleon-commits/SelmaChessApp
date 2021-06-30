import { shallowMount } from '@vue/test-utils'
import CustomHR from '@/components/subcomponents/CustomHR.vue'
import Vuetify from 'vuetify'

describe('CustomHR.vue', () => {
  it('renders component', () => {
    const wrapper = shallowMount(CustomHR, {
      vuetify: new Vuetify({
        breakpoint: {
          mobileBreakpoint: 'sm'
        }
      })
    })
    expect(wrapper)
  })
})
