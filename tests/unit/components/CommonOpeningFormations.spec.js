import { shallowMount } from '@vue/test-utils'
import CommonOpeningFormations from '@/components/CommonOpeningFormations.vue'
import state from '@/store/State';

describe('CommonOpeningFormations.vue', () => {
  it('renders component', () => {
    const wrapper = shallowMount(CommonOpeningFormations, {
      mocks: {
        $store: {
          state,
        },
    },
    });
    expect(wrapper);
  })
})
