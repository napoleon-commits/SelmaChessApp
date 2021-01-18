<template>
    <div :style="`background-color: ${$vuetify.theme.dark?'#272727':''};`">
        <b-navbar toggleable="lg" :type="`${$vuetify.theme.dark?'dark':'light'}`">
            <b-navbar-brand @click="goToHome">Selma Chess App</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

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
import TrainingLinks from '@/static/TrainingLinks';

export default {
    name: 'Navbar',
    data() {
        return {
            TrainingLinks,
        };
    },
    methods: {
        goTo(index) {
            if(this.$route.name !== TrainingLinks[index]){
                this.$router.push({name: TrainingLinks[index]});
                document.body.scrollTop = document.documentElement.scrollTop = 0;
            }
        },
        goToHome(){
            if(this.$route.name !== 'LandingPage'){
                this.$router.push({name: 'LandingPage'});
                document.body.scrollTop = document.documentElement.scrollTop = 0;
            }
        }
    }
}
</script>

<style>

</style>