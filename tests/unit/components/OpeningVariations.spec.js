import { shallowMount } from '@vue/test-utils'
import OpeningVariations from '@/components/OpeningVariations.vue'
import state from '@/store/State'

describe('OpeningVariations.vue', () => {
  it('renders component', () => {
    const wrapper = shallowMount(OpeningVariations, {
      mocks: {
        $store: {
          state
        }
      }
    })
    expect(wrapper)
  })
})
