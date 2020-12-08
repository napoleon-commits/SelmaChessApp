import { shallowMount } from '@vue/test-utils';
import Toolbar from '@/components/Toolbar';
import state from '@/store/state';
import mutations from '@/store/mutations';

describe('Toolbar.vue', () => {
  const wrapper = shallowMount(Toolbar, {
    mocks: {
      $store: {
        state,
        mutations,
        commit: (method) => {
          mutations[method](state);
        },
      },
    },
  });
  it('should render the component', () => {
    expect(wrapper.exists()).toBe(true);
  });
  it('should toggle the dark mode theme.', () => {
    const currentMode = wrapper.vm.$store.state.darkMode;
    wrapper.vm.toggleMode();
    expect(wrapper.vm.$store.state.darkMode).toBe(!currentMode);
  });
});
