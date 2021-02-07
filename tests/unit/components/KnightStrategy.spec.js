import { shallowMount } from '@vue/test-utils'
import KnightStrategy from '@/components/KnightStrategy.vue'
import state from '@/store/State';

describe('KnightStrategy.vue', () => {
  it('renders component', () => {
    const wrapper = shallowMount(KnightStrategy, {
      mocks: {
        $store: {
          state,
        },
      },
    });
    expect(wrapper);
  })
})
