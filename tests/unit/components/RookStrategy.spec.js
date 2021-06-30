import { shallowMount } from '@vue/test-utils'
import RookStrategy from '@/components/RookStrategy.vue'
import state from '@/store/State'

describe('RookStrategy.vue', () => {
  it('renders component', () => {
    const wrapper = shallowMount(RookStrategy, {
      mocks: {
        $store: {
          state
        }
      }
    })
    expect(wrapper)
  })
})
