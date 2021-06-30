import { shallowMount } from '@vue/test-utils'
import BishopStrategy from '@/components/BishopStrategy.vue'
import state from '@/store/State'

describe('BishopStrategy.vue', () => {
  it('renders component', () => {
    const wrapper = shallowMount(BishopStrategy, {
      mocks: {
        $store: {
          state
        }
      }
    })
    expect(wrapper)
  })
})
