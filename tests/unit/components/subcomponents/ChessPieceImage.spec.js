import { shallowMount } from '@vue/test-utils'
import ChessPieceImage from '@/components/subcomponents/ChessPieceImage.vue'

describe('ChessPieceImage.vue', () => {
  it('renders component', () => {
    const wrapper = shallowMount(ChessPieceImage);
    expect(wrapper);
  })
})
