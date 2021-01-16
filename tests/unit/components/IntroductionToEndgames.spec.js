import { shallowMount } from '@vue/test-utils'
import IntroductionToEndgames from '@/components/IntroductionToEndgames.vue'

describe('IntroductionToEndgames.vue', () => {
  it('renders component', () => {
    const wrapper = shallowMount(IntroductionToEndgames);
    expect(wrapper);
  })
})
