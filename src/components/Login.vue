<template>
    <form class="mx-2" :style="`border: 2px solid ${customColor}; border-radius: 8px;`">
        <div class="mx-2 my-2">
            <div class="h4 mt-2">
                Sign in to your account
            </div>
            <div class="form-group">
                <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Username"
                    v-bind="username"
                    :style="`border: 2px solid ${customColor};`"
                >
            </div>
            <div class="form-group">
                <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                    v-bind="password"
                    :style="`border: 2px solid ${customColor};`"
                >
            </div>
            <button class="mt-1" :style="`border: 2px solid ${customColor};`">Submit</button>
            <div class="mt-2">
                <span>Need an account?</span>
                <span
                    class="c-pointer"
                    :style="`color: ${customColor}`"
                    @click="router.push('/register')"
                >
                    Register
                </span>
            </div>
        </div>
    </form>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      validForm: false,
    };
  },
  computed: {
    customColor() {
      return this.$store.state.customColor;
    },
    router() {
      return this.$router;
    },
  },
};
</script>

<style>

</style>
