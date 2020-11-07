<template>
  <div>
    <div class="h5">Can you guess the chess opening?</div>
    <br />
    <div
      v-if="openingsArray[openingsArrayIndex]"
    >
      <div>
        {{openingsArray[openingsArrayIndex][0]}}; {{openingsArray[openingsArrayIndex][1]}}
      </div>
      <br />
      <div>
        Solution: {{openingsArray[openingsArrayIndex][3]}}
      </div>
      <br />
    </div>
    <div>Streak: {{streak}}</div>
    <br />
    <div class="row">
      <div class="col"><button class="w-100">Show Solution</button></div>
      <div class="col"><button class="w-100" @click="next">Next</button></div>
    </div>
  </div>
</template>

<script>
import ATSV from '@/static/eco/a';
import BTSV from '@/static/eco/b';
import CTSV from '@/static/eco/c';
import DTSV from '@/static/eco/d';
import ETSV from '@/static/eco/e';

export default {
  data() {
    return {
      streak: 0,
      openingsArray: [],
      openingsArrayIndex: 0,
    };
  },
  mounted() {
    this.openingsArray = ATSV.concat(BTSV).concat(CTSV).concat(DTSV).concat(ETSV);
    for (let i = 0; i < this.openingsArray.length; i += 1) {
      const randomLocation = Math.floor(Math.random() * this.openingsArray.length);
      const randomOpening = this.openingsArray[randomLocation];
      this.openingsArray[randomLocation] = this.openingsArray[i];
      this.openingsArray[i] = randomOpening;
    }
  },
  methods: {
    next() {
      if ((this.openingsArrayIndex + 1) === this.openingsArray.length) {
        this.openingsArrayIndex = 0;
      } else {
        this.openingsArrayIndex += 1;
      }
    },
  },
};
</script>

<style>

</style>
