<template>
  <div class="tangerines">
    <div class="projectImage"></div>
    <div class="description">
      <div class="container">
        <div class="productContainer">
          <v-img
            src="/img/work/Illustrations/WinFromWithin/WinFromWithinBottle.png"
            class="product"
          ></v-img>
        </div>
      </div>
      <h1 class="mb-3">{{ projectName }}</h1>
      <p
        class="projectDetail"
      >Experimental illustration based on Gatorade's Win From Within Ad series. This is my take on NBA players at their prime moments. Doing whatever it takes to win.</p>
    </div>
    <v-img v-for="image in images" :key="image" :src="`${image.src}`" class="imageBG"></v-img>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projectName: "WinFromWithin: Illustration Series",

      images: [
        {
          src: "/img/work/Illustrations/winFromWithin/WithinJordan.jpg"
        },
        { src: "/img/work/Illustrations/winFromWithin/WithinKD.jpg" },
        { src: "/img/work/Illustrations/winFromWithin/WithinD12.jpg" },
        { src: "/img/work/Illustrations/winFromWithin/WithinWade.jpg" }
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
  width: 125px;
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
  background-color: #ffe270;
  height: 250px;
}

/* desktop styles */
@media screen and (min-width: 768px) {
  .productContainer {
    width: 150px;
  }
  .product {
    margin-bottom: -350px;
    top: -350px;
  }
  .projectImage {
    background-color: #ffe270;
    height: 400px;
  }
  .description {
    margin-left: 20%;
    width: 50vw;
  }
}
</style>
