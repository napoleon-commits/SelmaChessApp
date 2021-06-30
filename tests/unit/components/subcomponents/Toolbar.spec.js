import { shallowMount } from '@vue/test-utils'
import Toolbar from '@/components/subcomponents/Toolbar.vue'
import Vuetify from 'vuetify'
import state from '@/store/State'
import SchoolColors from '@/static/SchoolColors.json'

describe('Toolbar.vue', () => {
  const wrapper = shallowMount(Toolbar, {
    vuetify: new Vuetify({
      breakpoint: {
        mobileBreakpoint: 'sm'
      }
    }),
    mocks: {
      $store: {
        state,
        commit: () => {}
      }
    }
  })
  it('renders component', () => {
    expect(wrapper)
  })
  it('should check the toggleTheme method', () => {
    const currentTheme = wrapper.vm.$vuetify.theme.dark
    wrapper.vm.toggleTheme()
    const toggledTheme = wrapper.vm.$vuetify.theme.dark
    expect(currentTheme).toBe(!toggledTheme)
  })
  it('should check the updateColor method', () => {
    expect(wrapper.vm.updateColor(SchoolColors['Dallas County'])).toBe(true)
  })
})
