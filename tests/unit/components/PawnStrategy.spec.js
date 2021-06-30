import { shallowMount } from '@vue/test-utils'
import PawnStrategy from '@/components/PawnStrategy.vue'
import state from '@/store/State'

describe('PawnStrategy.vue', () => {
  it('renders component', () => {
    const wrapper = shallowMount(PawnStrategy, {
      mocks: {
        $store: {
          state
        }
      }
    })
    expect(wrapper)
  })
})
