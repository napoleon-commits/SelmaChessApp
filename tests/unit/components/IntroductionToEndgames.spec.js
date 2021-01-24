import { shallowMount } from '@vue/test-utils'
import IntroductionToEndgames from '@/components/IntroductionToEndgames.vue'
import state from '@/store/State';
import Vuetify from 'vuetify';

describe('IntroductionToEndgames.vue', () => {
  it('renders component', () => {
    const wrapper = shallowMount(IntroductionToEndgames, {
      mocks: {
        $store: {
          state,
        },
      },
      vuetify: new Vuetify({
        breakpoint: {
            mobileBreakpoint: 'sm',
        }
    }),
    });
    expect(wrapper);
  })
})
