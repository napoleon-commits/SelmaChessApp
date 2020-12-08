export default {
  toggleDarkMode(state) {
    state.darkMode = !state.darkMode;
    if (state.darkMode) {
      state.modeClass = 'dark-mode';
    } else {
      state.modeClass = 'light-mode';
    }
  },
};
