import { shallowMount } from '@vue/test-utils'
import Toolbar from '@/components/subcomponents/Toolbar.vue'
import Vuetify from 'vuetify';


describe('Toolbar.vue', () => {
    const wrapper = shallowMount(Toolbar, {
        vuetify: new Vuetify({
            breakpoint: {
                mobileBreakpoint: 'sm',
            }
        }),
    });
    it('renders component', () => {
        expect(wrapper);
    });
    it('should check the toggleTheme method', () => {
        const currentTheme = wrapper.vm.$vuetify.theme.dark;
        wrapper.vm.toggleTheme();
        const toggledTheme = wrapper.vm.$vuetify.theme.dark;
        expect(currentTheme).toBe(!toggledTheme);
    });
})
