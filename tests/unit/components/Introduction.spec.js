import { shallowMount } from '@vue/test-utils'
import Introduction from '@/components/Introduction.vue'
import state from '@/store/State';

describe('Introduction.vue', () => {
  it('renders component', () => {
    const wrapper = shallowMount(Introduction, {
      mocks: {
        $store: {
          state,
        },
    },
    });
    expect(wrapper);
  })
})
