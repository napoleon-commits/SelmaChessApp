import { shallowMount } from '@vue/test-utils'
import Pagination from '@/components/subcomponents/Pagination.vue'
import state from '@/store/State';

describe('Pagination.vue', () => {
  it('renders component', () => {
    const wrapper = shallowMount(Pagination, {
        mocks: {
            $store: {
              state,
            },
          },
    });
    expect(wrapper);
  })
})
