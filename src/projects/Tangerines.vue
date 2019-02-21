<template>
  <div class="tangerines">
    <div class="projectImage"></div>
    <div class="description">
      <h1 class="mb-3">{{ projectName }}</h1>
      <p
        class="projectDetail"
      >Tangerines is a field hockey team based in Orange County, California. The team contacted me for design services in creating an identity. I was tasked to design a web app as well that would integrate their posts from Facebook and other field hockey web sites via RSS feeds.</p>

      <div class="services mt-5">
        <h3>Services:</h3>
        <ul>
          <li v-for="service in services" :key="service">{{ service.service }}</li>
        </ul>
      </div>
    </div>
    <v-img v-for="image in images" :key="image" :src="`${image.src}`" class="imageBG"></v-img>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projectName: "Tangerines",
      services: [{ service: "Branding" }, { service: "Web Design" }],
      images: [
        { src: "/img/work/OCFHC/tangerines_caseStudy_02.jpg" },
        { src: "/img/work/OCFHC/tangerines_caseStudy_03.jpg" }
      ]
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
.projectImage {
  background-image: url("/img/work/OCFHC/tangerines_caseStudy_01.jpg");
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
