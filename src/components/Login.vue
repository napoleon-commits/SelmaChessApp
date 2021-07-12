<template>
    <div class="mr-5 ml-4">
        <validation-observer
            ref="observer"
            v-slot="{ invalid }"
        >
            <form @submit.prevent="submit">
            <validation-provider
                v-slot="{ errors }"
                name="Username"
                rules="required|max:10"
            >
                <v-text-field
                v-model="name"
                :counter="10"
                :error-messages="errors"
                label="Username"
                required
                ></v-text-field>
            </validation-provider>
            <validation-provider
                v-slot="{ errors }"
                name="PhoneNumber"
                :rules="{
                required: true,
                digits: 10,
                regex: '^(334)\\d{7}$'
                }"
            >
                <v-text-field
                v-model="phoneNumber"
                :counter="10"
                :error-messages="errors"
                label="Phone Number"
                required
                ></v-text-field>
            </validation-provider>
            <validation-provider
                v-slot="{ errors }"
                name="email"
                rules="required|email"
            >
                <v-text-field
                v-model="email"
                :error-messages="errors"
                label="E-mail"
                required
                ></v-text-field>
            </validation-provider>
            <validation-provider
                v-slot="{ errors }"
                name="select"
                rules="required"
            >
                <v-select
                v-model="select"
                :items="items"
                :error-messages="errors"
                label="School"
                data-vv-name="select"
                required
                ></v-select>
            </validation-provider>
            <!-- <validation-provider
                v-slot="{ errors }"
                rules="required"
                name="checkbox"
            >
                <v-checkbox
                v-model="checkbox"
                :error-messages="errors"
                value="1"
                label="Option"
                type="checkbox"
                required
                ></v-checkbox>
            </validation-provider> -->

            <v-btn
                class="mr-4"
                type="submit"
                :disabled="invalid"
            >
                submit
            </v-btn>
            <v-btn @click="clear">
                clear
            </v-btn>
            </form>
        </validation-observer>
    </div>
</template>

<script>
import { required, digits, email, max, regex } from 'vee-validate/dist/rules'
import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate'

setInteractionMode('eager')

extend('digits', {
  ...digits,
  message: '{_field_} needs to be {length} digits. ({_value_})'
})

extend('required', {
  ...required,
  message: '{_field_} can not be empty'
})

extend('max', {
  ...max,
  message: '{_field_} may not be greater than {length} characters'
})

extend('regex', {
  ...regex,
  message: '{_field_} {_value_} does not match {regex}'
})

extend('email', {
  ...email,
  message: 'Email must be valid'
})

export default {
  name: 'Login',
  components: {
    ValidationProvider,
    ValidationObserver
  },
  data: () => ({
    name: '',
    phoneNumber: '',
    email: '',
    select: null,
    items: [
      'Dallas County',
      'Southside',
      'Keith',
      'Selma High',
      'Other'
    ],
    checkbox: null
  }),

  methods: {
    submit () {
      this.$refs.observer.validate()
    },
    clear () {
      this.name = ''
      this.phoneNumber = ''
      this.email = ''
      this.select = null
      this.checkbox = null
      this.$refs.observer.reset()
    }
  }
}
</script>

<style>

</style>
