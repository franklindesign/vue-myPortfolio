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
      <p class="projectDetail">Select Daily UI</p>
      <div class="services mt-5">
        <h3>Services:</h3>
        <ul>
          <li v-for="service in services" :key="service">
            {{ service.service }}
          </li>
        </ul>
      </div>
    </div>
    <div class="iframe">
      <iframe
        width="100%"
        height="100%"
        src="https://xd.adobe.com/embed/c3cfff5c-441c-42ef-7375-0b290cb7b3d0-b5fe/"
        frameborder="0"
        allowfullscreen
      ></iframe>
    </div>
    <!-- <v-img v-for="image in images" :key="image" :src="`${image.src}`" class="imageBG"></v-img> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      projectName: "Dribbble Daily UI ",
      services: [{ service: "User Interface" }],
      images: [{ src: "/img/work/NU/work_nu_logo_1600x600.png" }]
    };
  }
};
</script>

<style scoped>
iframe {
  height: 300px;
  margin: 0;
  padding: 0;
}
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
  width: 200px;
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
  iframe {
    height: 800px;
    margin: 0;
    padding: 0;
  }
  .productContainer {
    width: 250px;
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
