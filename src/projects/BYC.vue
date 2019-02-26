<template>
  <div class="byc">
    <div class="projectImage"></div>
    <div class="description">
      <div class="container">
        <div class="productContainer">
          <v-img src="/img/work/BYC/byc.png" class="product"></v-img>
        </div>
      </div>

      <h1 class="mb-3">{{ projectName }}</h1>
      <p class="projectDetail">
        Smart Links 2-in-1 Build Your Creativiy series is a kid's toy bundled
        with the Kids meal. As a freelancer at STROTTMAN, I have assisted in the
        packaging design, finishing tasks needed to push closer to the final
        rounds of revision. With my assist, the creative team were able to
        finish the project for Wendy's just in time for scheduled production.
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
.container {
  display: flex;
  align-items: center;
  justify-content: center;
}
.productContainer {
  width: 50%;
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

.product {
  width: 100%;
  top: -200px;
  margin-bottom: -200px;
}
.projectImage {
  background-color: #b0f7ff;
  height: 250px;
}

/* desktop styles */
@media screen and (min-width: 768px) {
  .productContainer {
    width: 30%;
  }
  .product {
    margin-bottom: -350px;
    top: -350px;
  }
  .projectImage {
    background-color: #b0f7ff;
    height: 400px;
  }
  .description {
    margin-left: 20%;
    width: 50vw;
  }
}
</style>
