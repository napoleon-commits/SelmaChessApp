import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('renders component', () => {
    const wrapper = shallowMount(HelloWorld);
    expect(wrapper);
  })
})
