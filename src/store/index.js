import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    darkMode: true,
    darkModeClass: 'dark-mode',
    chessboardWidth: 0,
    toolbarHeight: 0,
  },
  mutations: {
    toggleDarkMode(state) {
      state.darkMode = !state.darkMode;
      if (state.darkMode) {
        state.darkModeClass = 'dark-mode';
      } else {
        state.darkModeClass = 'light-mode';
      }
    },
    setChessBoardWidth(state, payload) {
      state.chessboardWidth = payload.chessboardWidth;
    },
    setToolbarHeight(state, payload) {
      state.toolbarHeight = payload.toolbarHeight;
    },
  },
});
