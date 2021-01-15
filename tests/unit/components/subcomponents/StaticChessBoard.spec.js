import { shallowMount } from '@vue/test-utils'
import StaticChessBoard from '@/components/subcomponents/StaticChessBoard.vue'
import Vuetify from 'vuetify';
import state from '@/store/State';

describe('StaticChessBoard.vue', () => {
  const wrapper = shallowMount(StaticChessBoard, {
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
      pieceString: 'rnbqkbnrpppppppp................................PPPPPPPPRNBQKBNR',
    }
  });
  it('renders component', () => {
    expect(wrapper);
  });
  it('should the onResize method', () => {
    const height = Math.floor(Math.random()*1200);
    const width = Math.floor(Math.random()*800);
    global.innerWidth = width;
    global.innerHeight = height;
    wrapper.vm.onResize();
    expect(wrapper.vm.windowHeight).toBe(height);
    expect(wrapper.vm.windowWidth).toBe(width);
  });
})
