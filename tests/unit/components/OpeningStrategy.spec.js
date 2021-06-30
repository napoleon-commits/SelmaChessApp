import { shallowMount } from '@vue/test-utils'
import OpeningStrategy from '@/components/OpeningStrategy.vue'
import state from '@/store/State'

describe('OpeningStrategy.vue', () => {
  it('renders component', () => {
    const wrapper = shallowMount(OpeningStrategy, {
      mocks: {
        $store: {
          state
        }
      }
    })
    expect(wrapper)
  })
})
