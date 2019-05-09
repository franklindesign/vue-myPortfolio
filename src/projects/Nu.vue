<template>
  <div class="nu">
    <div class="projectImage"></div>
    <div class="description">
      <div class="container">
        <div class="productContainer">
          <v-img
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            src="/img/work/NU/nu_whey_product.png"
            class="product"
          ></v-img>
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="1500"
        data-aos-easing="ease-in-out"
      >
        <h1 class="mb-3">{{ projectName }}</h1>
        <p class="projectDetail">
          Nu Whey Protein is a unique health nutrition company founded by Lenyn
          V. Nunez, fitness coach, author and former Mr. California
          (Bodybuilding Competition, 2011). Lenyn wanted to build a brand that
          supports his day to day lifestyle and passion in health and nutrition.
          I was approached to conceptualize a label packaging and direct his
          vision, a "Nu-Way" of life that eventually consisted of a healthy and
          vegan-friendly whey protein supplement. After numerous rounds of
          constant communication with his team, we came up with a solution that
          visually communicate a high-end quality product for casual gym-goers,
          vegans, and fit individuals.
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
    </div>
    <v-img
      data-aos="fade-up"
      data-aos-duration="1500"
      data-aos-easing="ease-in-out"
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
      projectName: "Nu Whey Protein",
      services: [
        { service: "Identity Design" },
        { service: "Packaging" },
        { service: "Art Direction" }
      ],
      images: [
        { src: "/img/work/NU/work_nu_logo_1600x600.png" },
        { src: "/img/work/NU/work_nu_statement_1600.jpg" },
        { src: "/img/work/NU/work_nu_label_large_1600x800.jpg" },
        { src: "/img/work/NU/work_nu_seal_1600.jpg" },
        { src: "/img/work/NU/work_nu_tradeshow_conceptonly.jpg" }
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
  width: 150px;
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
  height: 250px;
  /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#ff8d8d+1,ffc1c1+100 */
  background: #5ae68b; /* Old browsers */
  background: -moz-linear-gradient(
    top,
    #5ae68b 1%,
    #9effc0 100%
  ); /* FF3.6-15 */
  background: -webkit-linear-gradient(
    top,
    #5ae68b 1%,
    #9effc0 100%
  ); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(
    to bottom,
    #5ae68b 1%,
    #9effc0 100%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ff8d8d', endColorstr='#ffc1c1',GradientType=0 ); /* IE6-9 */
}

/* desktop styles */
@media screen and (min-width: 768px) {
  .productContainer {
    width: 225px;
  }
  .product {
    margin-bottom: -350px;
    top: -350px;
  }
  .projectImage {
    background-color: #5ae68b;
    height: 400px;
  }
  .description {
    margin-left: 20%;
    width: 50vw;
  }
}
</style>
