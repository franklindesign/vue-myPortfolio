<template>
  <v-container class="mt-5 topSpacing">
    <div>
      <h1>About</h1>
      <div class="me">
        Los Angeles based graphic designer and front-end web developer, working
        alongside small business owners and entrepreneurs in creating consumer
        products and developing user-friendly web apps.
      </div>
      <div class="mt-4">
        <strong>Key Qualifications:</strong>
        <ul>
          <li>Bachelor's degree with 8+ years in design related field.</li>
          <li>Strong Knowledge of typography, layout, and identity design.</li>
          <li>
            High attention to detail and adherence to defined brand guidelines.
          </li>
          <li>
            Strong eye for color matching, experience working with Pantone and
            CMYK.
          </li>
          <li>
            Knowledge of print requirements needed for art file preparation and
            submission to vendors.
          </li>
          <li>
            Working knowledge of the Adobe Creative Suite of applications.
          </li>
          <li>
            Fluency in best practices for user interface, some experience with
            interaction design or user experience workflows.
          </li>
          <li>
            Experience working with marketing automation platforms such as
            Mailchimp, and CMS systems such as Wordpress.
          </li>
          <li>
            Familiarity with the most widely used web analytics service, Google
            Analytics.
          </li>
          <li>
            Experience with motion prototyping with Adobe XD, Invision Studio,
            and Principle.
          </li>
          <li>
            Front-end coding experience and intermediate proficiency with HTML,
            CSS, Git, and Javascript libraries (React and Vue).
          </li>
        </ul>
      </div>

      <div class="mt-3">
        <button
          class="buttonStyle"
          :class="{ buttonStyle: !viewResume, closeStyle: viewResume }"
          @click="viewResume = !viewResume"
        >
          View Resume
        </button>
        <button class="ml-1 downloadBtn">Download Resume</button>
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
      closeResume: true,
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
.downloadBtn {
  width: 150px;
  margin: 10px;
  padding: 10px;
  border-radius: 50px;
  color: black;
  background-color: #e9e9e9;
}
.downloadBtn:hover {
  width: 150px;
  margin: 10px;
  padding: 10px;
  border-radius: 50px;
  color: white;
  background-color: #323232;
}
.buttonStyle {
  width: 150px;
  margin: 10px;
  padding: 10px;
  transform: scale(1);
  background-color: #00a6ff;
  border-radius: 50px;
}
.closeStyle {
  width: 150px;
  margin: 10px;
  padding: 10px;
  transform: scale(1);
  background-color: #393939;
  border-radius: 50px;
}
a {
  color: rgb(199, 199, 199);
}
a:hover {
  color: black;
}
.buttonStyle:hover {
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
