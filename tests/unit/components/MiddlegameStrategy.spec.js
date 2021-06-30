import { shallowMount } from '@vue/test-utils'
import MiddlegameStrategy from '@/components/MiddlegameStrategy.vue'
import state from '@/store/State'

describe('MiddlegameStrategy.vue', () => {
  it('renders component', () => {
    const wrapper = shallowMount(MiddlegameStrategy, {
      mocks: {
        $store: {
          state
        }
      }
    })
    expect(wrapper)
  })
})
