import { shallowMount } from '@vue/test-utils'
import SpecialMoves from '@/components/SpecialMoves.vue'
import state from '@/store/State'

describe('SpecialMoves.vue', () => {
  it('renders component', () => {
    const wrapper = shallowMount(SpecialMoves, {
      mocks: {
        $store: {
          state
        }
      }
    })
    expect(wrapper)
  })
})
