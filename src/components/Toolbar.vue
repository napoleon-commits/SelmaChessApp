<template>
  <div id="toolbar" :class="`${darkModeClass} row px-3`">
    <div class="dropdown col-11">
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
      <div
        id="school-color-dropdown-menu"
        :class="`dropdown-menu ${darkModeClass}`"
        aria-labelledby="dropdownMenuButton"
      >
        <div class="dropdown-item c-pointer" @click="setSchoolColor('keith')">
          <span :class="darkModeClass">Keith</span>
          <span class="h2 keith-high-text-color">&bull;</span>
        </div>
        <div class="dropdown-item c-pointer" @click="setSchoolColor('selma')">
          <span :class="darkModeClass">Selma</span>
          <span class="h2 selma-high-text-color">&bull;</span>
        </div>
        <div class="dropdown-item c-pointer" @click="setSchoolColor('southside')">
          <span :class="darkModeClass">Southside</span>
          <span class="h2 southside-high-text-color">&bull;</span>
        </div>
        <div class="dropdown-item c-pointer" @click="setSchoolColor('dallas')">
          <span :class="darkModeClass">Dallas County</span>
          <span class="h2 dallas-county-high-text-color">&bull;</span>
        </div>
        <hr :class="darkModeClass"/>
        <div :class="`dropdown-item ${darkModeClass}`">
          <div :class="`mb-3 ${darkModeClass}`">Custom Color</div>
          <div>
            <label :class="darkModeClass">Red: </label>
            <input
              v-model="red"
              :class="`w-50 rgb-picker float-right ${darkModeClass}`"
              :placeholder="redPlaceHolder"
            />
          </div>
          <div>
            <label :class="darkModeClass">Green: </label>
            <input
              v-model="green"
              :class="`w-50 rgb-picker float-right ${darkModeClass}`"
              :placeholder="greenPlaceHolder"
            />
          </div>
          <div>
            <label :class="darkModeClass">Blue: </label>
            <input
              v-model="blue"
              :class="`w-50 rgb-picker float-right ${darkModeClass}`"
              :placeholder="bluePlaceHolder"
            />
          </div>
          <div>
            <button
              :class="`rgb-picker w-100 ${darkModeClass}`"
              @click="setCustomColor"
            >
              Set
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="col-1">
      <div class="float-right mt-2" style="margin-right: 1px;">
        <span v-if="darkMode" @click="toggleDarkMode" class="c-pointer">
          <v-icon class="text-white">
            mdi-white-balance-sunny
          </v-icon>
        </span>
        <span v-else @click="toggleDarkMode" class="c-pointer">
          <v-icon>mdi-moon-waxing-crescent</v-icon>
        </span>
      </div>
    </div>
  </div>
</template>

<script>

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
  computed: {
    darkModeClass() {
      return this.$store.state.darkModeClass;
    },
    darkMode() {
      return this.$store.state.darkMode;
    },
  },
  methods: {
    toggleDarkMode() {
      this.$store.commit('toggleDarkMode');
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
      // this.adjustToolBarSize();
    },
    setCustomColor() {
      this.$store.commit('setCustomColor', { red: this.red, green: this.green, blue: this.blue });
      // this.adjustToolBarSize();
    },
  },
};
</script>

<style>
  #toolbar{
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2);
    margin-top: -1px;
  }
  input.rgb-picker {
    border-radius: 8px;
    text-align: center;
  }
  input.rgb-picker.light-mode{
    border: 2px solid #343a40;
  }
  input.rgb-picker.dark-mode{
    border: 2px solid white;
  }
  button.rgb-picker.light-mode {
    border: 2px solid #343a40;
  }
  button.rgb-picker.dark-mode {
    border: 2px solid white;
  }
  #dropdownMenuButton:hover{
    font-weight: bold;
  }
  hr.dark-mode{
    border-top: 2px solid white;
  }
  hr.light-mode{
    border-top: 2px solid #343a40;
  }
  #school-color-dropdown-menu.light-mode{
    border: 2px solid #343a40;
  }
  #school-color-dropdown-menu.dark-mode{
    border: 2px solid white;
  }
</style>
