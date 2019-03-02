<template>
  <v-container class="mt-5 topSpacing">
    <div>
      <h1>About</h1>
      <div class="me">
        I'm Franklin, your design partner based in Los Angeles. Helping
        companies develop consumer products and user friendly websites/apps.
        I've worked alongside small businesses and entrepreneurs.
      </div>

      <div class="mt-3">
        <button class="buttonStyle" @click="viewResume = !viewResume">
          View Resume
        </button>
        <div v-show="viewResume" class="centerResume">
          <Resume></Resume>
        </div>
      </div>
    </div>
  </v-container>
</template>

<script>
import Resume from "@/components/Resume.vue";
export default {
  data() {
    return {
      viewResume: false
    };
  },
  name: "About",
  components: {
    Resume
  }
};
</script>

<style scoped>
.topSpacing {
  padding-top: 50px;
}
.buttonStyle {
  width: 200px;
  margin: 10px;
  padding: 10px;
  transform: scale(1);
  background-color: #323232;
  border-radius: 50px;
}
a {
  color: rgb(199, 199, 199);
}
a:hover {
  color: black;
}
.buttonStyle:hover {
  background-color: #00a6ff;
  transform: scale(1.1);
  transition: all 300ms ease-out;
}

/* mobile styles */

.me {
  color: white;
  font-size: 1.5em;
  line-height: 1.25em;
}

/* desktop styles */
@media screen and (min-width: 768px) {
  .me {
    font-size: 1.5em;
    width: 800px;
  }
  .what {
    font-size: 1em;
    padding: 10px;
  }
  .about {
    width: 800px;
    margin: 0 auto;
  }
}
</style>
