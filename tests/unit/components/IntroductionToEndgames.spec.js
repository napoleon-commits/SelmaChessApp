import { shallowMount } from '@vue/test-utils'
import IntroductionToEndgames from '@/components/IntroductionToEndgames.vue'
import state from '@/store/State';

describe('IntroductionToEndgames.vue', () => {
  it('renders component', () => {
    const wrapper = shallowMount(IntroductionToEndgames, {
      mocks: {
        $store: {
          state,
        },
      },
    });
    expect(wrapper);
  })
})
