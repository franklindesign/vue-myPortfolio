<template>
  <div class="nu">
    <div class="projectImage"></div>

    <div class="description">
      <h1 class="mb-3">{{ projectName }}</h1>
      <p class="projectDetail">
        Nu Whey Protein is a unique health nutrition company founded by Lenyn V.
        Nunez, fitness coach, author and former Mr. California (Bodybuilding
        Competition, 2011). Lenyn wanted to build a brand that supports his day
        to day lifestyle and passion in health and nutrition. I was approached
        to conceptualize a label packaging and direct his vision, a "Nu-Way" of
        life that eventually consisted of a healthy and vegan-friendly whey
        protein supplement. After numerous rounds of constant communication with
        his team, we came up with a solution that visually communicate a
        high-end quality product for casual gym-goers, vegans, and fit
        individuals.
      </p>

      <div class="services mt-5">
        <h3>Services:</h3>
        <ul>
          <li v-for="service in services" :key="service">
            {{ service.service }}
          </li>
        </ul>
      </div>
    </div>
    <v-img contain src="/img/work/NU/work_nu_logo_1600x600.png"></v-img>
    <v-img contain src="/img/work/NU/work_nu_label_large_1600x800.jpg"></v-img>
    <v-img contain src="/img/work/NU/work_nu_statement_1600.jpg"></v-img>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projectName: "Nu Whey Protein",
      services: [
        { service: "Identity Design" },
        { service: "Packaging" },
        { service: "Art Direction" }
      ]
    };
  }
};
</script>

<style scoped>
.projectDetail {
  font-size: 1.25em;
}
.nu {
  z-index: 2;
}
.projectImage {
  background-image: url("/img/work/NU/work_nu_large_1600x600.jpg");
  height: 400px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.description {
  margin: 25px;
  padding: 5px;
  width: 90vw;
  line-height: 2.5em;
}

li {
  margin: 5px;
  list-style: none;
}
ul {
  padding: 0;
}
/* desktop styles */
@media screen and (min-width: 768px) {
  .projectImage {
    max-width: 100%;
    height: 600px;

    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .description {
    margin-left: 20%;
    width: 50vw;
  }
}
</style>
