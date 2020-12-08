import { shallowMount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld';
import state from '@/store/state';

describe('HelloWorld.vue', () => {
  const wrapper = shallowMount(HelloWorld, {
    mocks: {
      $store: {
        state,
      },
    },
  });
  it('should render the component', () => {
    expect(wrapper.exists()).toBe(true);
  });
});
