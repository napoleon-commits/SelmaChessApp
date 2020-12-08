import mutations from '@/store/mutations';
import state from '@/store/state';

describe('mutations.js', () => {
  const stateCopy = state;
  it('should test the toggleDarkMode function', () => {
    const darkMode1 = stateCopy.darkMode;
    mutations.toggleDarkMode(stateCopy);
    expect(stateCopy.darkMode).toBe(!darkMode1);
    const darkMode2 = stateCopy.darkMode;
    mutations.toggleDarkMode(stateCopy);
    expect(stateCopy.darkMode).toBe(!darkMode2);
  });
});
