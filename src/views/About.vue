<template>
  <v-container class="mt-5">
    <div class="about mt-5">
      <div class="me">
        Franklin Manghi is a graphic & web designer living in Los Angeles.
        Currently working as a freelancer, designing user interface, creating
        product packaging, developing websites and campaigns for small businesses.
      </div>

      <p class="me">
        Helping businesses with creating, increasing brand awareness, and pushing
        products into users' hands.
      </p>
      <div class="mt-3">
        <button class="viewResume" @click="viewResume = !viewResume">View Resume</button>
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
.viewResume {
  color: black;
  width: 150px;
  margin: 10px;
  padding: 10px;
  background: rgb(206, 206, 206);
  border-radius: 25px;
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
