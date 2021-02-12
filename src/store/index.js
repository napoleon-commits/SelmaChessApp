import Vue from 'vue'
import Vuex from 'vuex'
import state from '@/store/State';

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations: {
    setTextColor(state, payload){
      if(payload.dark){
        state.textColor = '#FFF';
      }
      else {
        state.textColor = 'rgba(0,0,0,0.87)';
      }
    },
    setBtnClass(state, payload){
      const red = payload.red;
      const green = payload.green;
      const blue = payload.blue;
      if(red==127 && green==127 && blue==127){
        state.btnClass = 'btn-default';
      }
      else if(red==71 && green==119 && blue==1){
        state.btnClass = 'btn-dallas-county';
      }
      else if(red==155 && green==221 && blue==255){
        state.btnClass = 'btn-selma';
      }
      else if(red==254 && green==5 && blue==3){
        state.btnClass = 'btn-southside';
      }
      else if(red==255 && green==210 && blue==2){
        state.btnClass = 'btn-keith';
      }
      else {
        state.btnClass = '';
      }
    },
  },
  actions: {
  },
  modules: {
  }
})
