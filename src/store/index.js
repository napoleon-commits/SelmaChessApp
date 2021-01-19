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
      else if(red==70 && green==165 && blue==81){
        state.btnClass = 'btn-dallas-county';
      }
      else if(red==155 && green==221 && blue==255){
        state.btnClass = 'btn-selma';
      }
      else if(red==255 && green==5 && blue==5){
        state.btnClass = 'btn-southside';
      }
      else if(red==0 && green==110 && blue==156){
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
