<template>
  <div id="toolbar">
    <v-toolbar
      :class="this.$store.state.darkModeClass"
      style="box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2) !important; border-top:"
    >
      <div class="dropdown">
        <button
          class="dropdown-toggle pl-0"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          School Colors
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <div class="dropdown-item c-pointer" @click="setSchoolColor('keith')">
            <span>Keith</span>
            <span class="h2 keith-high-text-color">&bull;</span>
          </div>
          <div class="dropdown-item c-pointer" @click="setSchoolColor('selma')">
            <span>Selma</span>
            <span class="h2 selma-high-text-color">&bull;</span>
          </div>
          <div class="dropdown-item c-pointer" @click="setSchoolColor('southside')">
            <span>Southside</span>
            <span class="h2 southside-high-text-color">&bull;</span>
          </div>
          <div class="dropdown-item c-pointer" @click="setSchoolColor('dallas')">
            <span>Dallas County</span>
            <span class="h2 dallas-county-high-text-color">&bull;</span>
          </div>
          <hr style="border-top: 2px solid #343a40"/>
          <div class="dropdown-item">
            <div class="mb-3">Custom Color</div>
            <div>
              <label>Red: </label>
              <input
                v-model="red"
                :class="`w-50 rgb-picker float-right`"
                :placeholder="redPlaceHolder"
              />
            </div>
            <div>
              <label>Green: </label>
              <input
                v-model="green"
                :class="`w-50 rgb-picker float-right`"
                :placeholder="greenPlaceHolder"
              />
            </div>
            <div>
              <label>Blue: </label>
              <input
                v-model="blue"
                :class="`w-50 rgb-picker float-right`"
                :placeholder="bluePlaceHolder"
              />
            </div>
            <div>
              <button
                :class="`rgb-picker w-100`"
                @click="setCustomColor"
              >
                Set
              </button>
            </div>
          </div>
        </div>
      </div>
      <v-spacer />
      <span v-if="this.$store.state.darkMode" @click="toggleDarkMode" class="c-pointer">
        <v-icon class="text-white">mdi-white-balance-sunny</v-icon>
      </span>
      <span v-else @click="toggleDarkMode" class="c-pointer">
        <v-icon>mdi-moon-waxing-crescent</v-icon>
      </span>
    </v-toolbar>
  </div>
</template>

<script>
import $ from 'jquery';

export default {
  data() {
    return {
      red: '',
      green: '',
      blue: '',
      redPlaceHolder: Math.floor(Math.random() * 256),
      greenPlaceHolder: Math.floor(Math.random() * 256),
      bluePlaceHolder: Math.floor(Math.random() * 256),
    };
  },
  methods: {
    toggleDarkMode() {
      this.$store.commit('toggleDarkMode');
      this.adjustToolBarSize();
    },
    setSchoolColor(schoolColor) {
      switch (schoolColor) {
        case 'dallas':
          this.$store.commit('setCustomColor', { red: 70, green: 165, blue: 81 });
          break;
        case 'keith':
          this.$store.commit('setCustomColor', { red: 0, green: 110, blue: 156 });
          break;
        case 'selma':
          this.$store.commit('setCustomColor', { red: 155, green: 221, blue: 255 });
          break;
        case 'southside':
          this.$store.commit('setCustomColor', { red: 255, green: 5, blue: 5 });
          break;
        default:
      }
      this.adjustToolBarSize();
    },
    setCustomColor() {
      this.$store.commit('setCustomColor', { red: this.red, green: this.green, blue: this.blue });
      this.adjustToolBarSize();
    },
    adjustToolBarSize() {
      const myInterval = setInterval(() => {
        this.$store.commit('setToolbarHeight', { toolbarHeight: $('#custom-header').height() });
      }, 1);
      setTimeout(() => {
        clearInterval(myInterval);
      }, 1500);
    },
  },
};
</script>

<style>
  input.rgb-picker {
    border: 2px solid #343a40;
    border-radius: 8px;
    text-align: center;
  }
  button.rgb-picker {
    border: 2px solid #343a40;
  }
  #dropdownMenuButton:hover{
    font-weight: bold;
  }
</style>
