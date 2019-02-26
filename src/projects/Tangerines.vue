<template>
  <div class="tangerines">
    <div class="projectImage"></div>
    <div class="description">
      <div class="container">
        <div class="productContainer">
          <v-img
            src="/img/work/OCFHC/tangerines_ipad_iphone.png"
            class="product"
          ></v-img>
        </div>
      </div>
      <h1 class="mb-3">{{ projectName }}</h1>
      <p class="projectDetail">
        Tangerines is a field hockey team based in Orange County, California.
        The team contacted me for design services in creating an identity. I was
        tasked to design a web app as well that would integrate their posts from
        Facebook and other field hockey web sites via RSS feeds.
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
    <v-img
      v-for="image in images"
      :key="image"
      :src="`${image.src}`"
      class="imageBG"
    ></v-img>
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
  background-color: #f48d3f;
  height: 250px;
}

/* desktop styles */
@media screen and (min-width: 768px) {
  .productContainer {
    width: 45%;
  }
  .product {
    margin-bottom: -350px;
    top: -350px;
  }
  .projectImage {
    background-color: #f48d3f;
    height: 400px;
  }
  .description {
    margin-left: 20%;
    width: 50vw;
  }
}
</style>
