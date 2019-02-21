<template>
  <div class="byc">
    <div class="projectImage"></div>

    <div class="description">
      <v-img src="/img/work/BYC/byc.png" class="product"></v-img>
      <h1 class="mb-3">{{ projectName }}</h1>
      <!-- <p class="projectDetail">Build Your Creativity</p> -->
      <div class="services mt-5">
        <h3>Services:</h3>
        <ul>
          <li v-for="service in services" :key="service">
            {{ service.service }}
          </li>
        </ul>
      </div>
    </div>
    <!-- <v-img v-for="image in images" :key="image" :src="`${image.src}`" class="imageBG"></v-img> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      projectName: "Wendy's Build Your Creativity",
      services: [{ service: "Packaging Design" }],
      images: [{ src: "/img/work/NU/work_nu_logo_1600x600.png" }]
    };
  }
};
</script>

<style scoped>
.imageBG {
  background-color: white;
}
.projectDetail {
  font-size: 1.25em;
}
.product {
  width: 100%;
  height: auto;
  top: -125px;
  margin-bottom: -120px;
}
.projectImage {
  /* background-image: url("/img/work/BYC/work_byc_01.jpg");

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover; */
  background-color: #b0f7ff;
  height: 200px;
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
  .product {
    margin-bottom: -300px;
    top: -300px;
  }
  .projectImage {
    /* max-width: 100%; */
    height: 400px;

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
