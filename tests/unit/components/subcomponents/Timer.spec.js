import { shallowMount } from '@vue/test-utils'
import Timer from '@/components/subcomponents/Timer.vue'

describe('Timer.vue', () => {
  it('renders component', () => {
    const wrapper = shallowMount(Timer);
    expect(wrapper);
  })
})
