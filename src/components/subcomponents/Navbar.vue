<template>
    <div :style="`background-color: ${$vuetify.theme.dark?'#272727':''};`">
        <b-navbar toggleable="lg" :type="`${$vuetify.theme.dark?'dark':'light'}`">
            <b-navbar-brand style="cursor: pointer;" @click="goToHome">Selma Chess App</b-navbar-brand>

            <b-navbar-toggle :style="`border-color: ${$vuetify.theme.dark?'white':'rgba(0, 0, 0, 0.87)'};`" :id="`${($vuetify.theme.dark)?'dark-mode-toggler':'light-mode-toggler'}`" target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
            <!-- <b-navbar-nav>
                <b-nav-item href="#">Link</b-nav-item>
                <b-nav-item href="#" disabled>Disabled</b-nav-item>
            </b-navbar-nav> -->

            <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <!-- <b-nav-form>
                        <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
                        <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
                    </b-nav-form> -->
                    <b-nav-item @click="goToOfflineChess">Offline Chess</b-nav-item>
                    <b-nav-item>Daily Chess Opening</b-nav-item>
                    <b-nav-item>Position Analyzer</b-nav-item>
                    <b-nav-item-dropdown text="Training" right>
                        <b-dropdown-item v-for="(object, index) in TrainingLinks" :key="index">
                            <span
                                @click="goTo(index)"
                                :style="`color: rgba(0,0,0,0.87);`"
                            >
                                {{index}}
                            </span>
                        </b-dropdown-item>
                    </b-nav-item-dropdown>

                    <!-- <b-nav-item-dropdown right>
                        <template #button-content>
                            <em>User</em>
                        </template>
                        <b-dropdown-item href="#">Profile</b-dropdown-item>
                        <b-dropdown-item href="#">Sign Out</b-dropdown-item>
                    </b-nav-item-dropdown> -->
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
import TrainingLinks from '@/static/TrainingLinks'

export default {
  name: 'Navbar',
  data () {
    return {
      TrainingLinks
    }
  },
  methods: {
    goTo (index) {
      if (this.$route.name !== TrainingLinks[index]) {
        this.$router.push({ name: TrainingLinks[index] })
        document.body.scrollTop = document.documentElement.scrollTop = 0
      }
    },
    goToHome () {
      if (this.$route.name !== 'LandingPage') {
        this.$router.push({ name: 'LandingPage' })
        document.body.scrollTop = document.documentElement.scrollTop = 0
      }
    },
    goToOfflineChess () {
      if (this.$route.name !== 'OfflineChess') {
        this.$router.push({ name: 'OfflineChess' })
      }
    }
  }
}
</script>

<style>
    #dark-mode-toggler > span {
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='rgb%28255, 255, 255%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
    }
    #light-mode-toggler > span {
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%280, 0, 0, 0.87%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
    }
    .navbar-dark .navbar-nav .nav-link{
      color: white !important
    }
    .navbar-light .navbar-nav .nav-link{
      color: rgba(0,0,0,0.87) !important
    }
</style>
