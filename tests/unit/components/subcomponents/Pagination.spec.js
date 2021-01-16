import { shallowMount } from '@vue/test-utils'
import Pagination from '@/components/subcomponents/Pagination.vue'

describe('Pagination.vue', () => {
  it('renders component', () => {
    const wrapper = shallowMount(Pagination);
    expect(wrapper);
  })
})
