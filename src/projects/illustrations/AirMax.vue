<template>
  <div class="tangerines">
    <div class="projectImage"></div>
    <div class="description">
      <div class="container">
        <div class="productContainer">
          <v-img src="/img/work/Illustrations/AirMax/AirMax.png" class="product"></v-img>
        </div>
      </div>
      <h1 class="mb-3">{{ projectName }}</h1>
      <p
        class="projectDetail"
      >Experimental illustration combining Nike's AIR MAX 90 OG "INFRARED" and LEGO pieces.</p>
    </div>
    <v-img v-for="image in images" :key="image" :src="`${image.src}`" class="imageBG"></v-img>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projectName: "AirMax90 x LEGO",

      images: [
        { src: "/img/work/Illustrations/AirMax/AirMaxLogo.jpg" },
        { src: "/img/work/Illustrations/AirMax/AirMaxModel.jpg" }
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
  width: 250px;
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
  background-color: #ff5b3e;
  height: 250px;
}

/* desktop styles */
@media screen and (min-width: 768px) {
  .productContainer {
    width: 300px;
  }
  .product {
    margin-bottom: -350px;
    top: -350px;
  }
  .projectImage {
    background-color: #ff5b3e;
    height: 400px;
  }
  .description {
    margin-left: 20%;
    width: 50vw;
  }
}
</style>
