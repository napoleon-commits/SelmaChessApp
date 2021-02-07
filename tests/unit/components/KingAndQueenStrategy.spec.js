import { shallowMount } from '@vue/test-utils'
import KingAndQueenStrategy from '@/components/KingAndQueenStrategy.vue'
import state from '@/store/State';

describe('KingAndQueenStrategy.vue', () => {
  it('renders component', () => {
    const wrapper = shallowMount(KingAndQueenStrategy, {
      mocks: {
        $store: {
          state,
        },
      },
    });
    expect(wrapper);
  })
})
