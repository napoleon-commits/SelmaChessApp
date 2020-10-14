<template>
    <div :class="darkModeClass">
        <nav class="navbar navbar-expand-lg">
            <span class="h5">Selma Chess App</span>
            <span
                class="navbar-toggler px-0"
                data-toggle="collapse"
                data-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
                @click="adjustToolBarSize"
                style="font-size: 1.75rem !important;"
            >
                &#9776;
            </span>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav ml-2">
                    <li class="nav-item">
                        <span class="nav-link c-pointer">
                            Login / Register
                        </span>
                    </li>
                    <li class="nav-item" v-if="route.path !== '/'">
                        <span class="nav-link c-pointer" @click="router.push('/')">Home</span>
                    </li>
                    <li class="nav-item" v-if="route.path !== '/offline'">
                        <span
                            class="nav-link c-pointer"
                            @click="router.push('/offline')"
                        >
                            Offline
                        </span>
                    </li>
                    <li class="nav-item" v-if="route.path !== '/engine'">
                        <span
                            class="nav-link c-pointer"
                            @click="router.push('/engine')"
                        >
                            Engine
                        </span>
                    </li>
                    <li class="nav-item dropdown">
                        <span
                            class="nav-link dropdown-toggle c-pointer"
                            href="#"
                            id="navbarDropdownMenuLink"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                            @click="adjustToolBarSize"
                        >
                            Mate Practicing
                        </span>
                    <div
                        :class="`dropdown-menu ${darkModeClass}`"
                        aria-labelledby="navbarDropdownMenuLink"
                    >
                        <span
                            :class="`dropdown-item c-pointer ${darkModeClass}`"
                        >
                            Queen
                        </span>
                        <span
                            :class="`dropdown-item c-pointer ${darkModeClass}`"
                        >
                            Rook
                        </span>
                        <span
                            :class="`dropdown-item c-pointer ${darkModeClass}`"
                        >
                            Pawn
                        </span>
                        <span
                            :class="`dropdown-item c-pointer ${darkModeClass}`"
                        >
                            Two Bishops
                        </span>
                        <span
                            :class="`dropdown-item c-pointer ${darkModeClass}`"
                        >
                            Knight-Bishop
                        </span>
                    </div>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
import $ from 'jquery';

export default {
  methods: {
    adjustToolBarSize() {
      const myInterval = setInterval(() => {
        this.$store.commit('setToolbarHeight', { toolbarHeight: $('#custom-header').height() });
      }, 1);
      setTimeout(() => {
        clearInterval(myInterval);
      }, 1500);
    },
  },
  computed: {
    darkModeClass() {
      return this.$store.state.darkModeClass;
    },
    customColor() {
      return this.$store.state.customColor;
    },
    router() {
      return this.$router;
    },
    route() {
      return this.$route;
    },
  },
};
</script>

<style>
    .nav-link:hover, .dropdown-item:hover{
        font-weight: bold;
    }
</style>
