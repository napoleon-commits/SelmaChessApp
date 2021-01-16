import { shallowMount } from '@vue/test-utils'
import CommonOpeningFormations from '@/components/CommonOpeningFormations.vue'

describe('CommonOpeningFormations.vue', () => {
  it('renders component', () => {
    const wrapper = shallowMount(CommonOpeningFormations);
    expect(wrapper);
  })
})
