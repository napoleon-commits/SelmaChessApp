<template>
    <div
        :class="`
            ${display} justify-content-center align-items-center w-100
            h-100 position-fixed overflow-auto modal
        `"
        @click="closeModal"
    >
        <div class="spinner-border text-success" role="status">
            <span class="sr-only">Loading...</span>
        </div>
    </div>
</template>

<script>
export default {
  props: ['clickable'],
  data() {
    return {
      display: 'd-flex',
    };
  },
  methods: {
    closeModal() {
      if (this.clickable) {
        this.display = 'd-none';
      }
    },
  },
};
</script>

<style>
    .modal {
        background-color: rgb(0,0,0); /* Fallback color */
        background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
    }
</style>
