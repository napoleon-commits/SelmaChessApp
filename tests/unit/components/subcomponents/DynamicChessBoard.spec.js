import { shallowMount } from '@vue/test-utils'
import DynamicChessBoard from '@/components/subcomponents/DynamicChessBoard.vue'
import Vuetify from 'vuetify';
import state from '@/store/State';

describe('DynamicChessBoard.vue', () => {
  const wrapper = shallowMount(DynamicChessBoard, {
    vuetify: new Vuetify({
      breakpoint: {
        mobileBreakpoint: 'sm',
      }
    }),
    mocks: {
      $store: {
        state,
      },
    },
    propsData: {
      moves: [
        '................................................PPP..PPPR...K..R',
        '................................................PPP..PPPR....RK.',
        '................................................PPP..PPPR...K..R',
        '................................................PPP..PPP..KR...R',
      ],
    }
  });
  it('renders component', () => {
    expect(wrapper);
  });
  it('should test the incrementIndex method', () => {
    wrapper.vm.moveIndex = 0;
    wrapper.vm.incrementIndex();
    expect(wrapper.vm.moveIndex).toBe(1);
    wrapper.vm.moveIndex = 3;
    wrapper.vm.incrementIndex();
    expect(wrapper.vm.moveIndex).toBe(0);
  })
})
