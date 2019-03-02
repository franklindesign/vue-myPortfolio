<template>
  <div class="byc">
    <div class="projectImage"></div>
    <div class="description">
      <div class="container">
        <div class="productContainer">
          <v-img
            src="/img/work/HIBIKI/hibiki_ipad_iphone.png"
            class="product"
          ></v-img>
        </div>
      </div>

      <h1 class="mb-3">{{ projectName }}</h1>
      <p class="projectDetail">
        Originally contacted to redesign the restaurant menu for Hibiki Sushi &
        Bar and as well as refreshing the company's identity, creating a whole
        new and modern look. My services also included web design where an
        online presence was needed for customers to view menu on their phones.
        Mailchimp was also integrated into the website in order to keep constant
        contact with customers.
      </p>

      <div class="services mt-5 mb-3">
        <h3>Services:</h3>
        <ul>
          <li v-for="service in services" :key="service">
            {{ service.service }}
          </li>
        </ul>
      </div>
      <a href="http://www.hibikisushi.net" target="_blank">
        <button class="buttonStyle">View Live Project</button>
      </a>
    </div>
    <!-- <v-img v-for="image in images" :key="image" :src="`${image.src}`" class="imageBG"></v-img> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      projectName: "Hibiki Sushi & Bar",
      services: [
        { service: "Branding" },
        { service: "Graphic Design" },
        { service: "Web Design" },
        { service: "Email Design" },
        { service: "Social Media Marketing" }
      ],
      images: [{ src: "/img/work/NU/work_nu_logo_1600x600.png" }]
    };
  }
};
</script>

<style scoped>
.buttonStyle {
  width: 200px;
  margin: 10px;
  padding: 5px;
  transform: scale(1);
  background-color: #323232;
  border-radius: 50px;
}
a {
  color: rgb(199, 199, 199);
}
a:hover {
  color: black;
}
.buttonStyle:hover {
  background-color: #ff8d8d;
  transform: scale(1.1);
  transition: all 300ms ease-out;
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
  height: 250px;
  /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#ff8d8d+1,ffc1c1+100 */
  background: #ff8d8d; /* Old browsers */
  background: -moz-linear-gradient(
    top,
    #ff8d8d 1%,
    #ffc1c1 100%
  ); /* FF3.6-15 */
  background: -webkit-linear-gradient(
    top,
    #ff8d8d 1%,
    #ffc1c1 100%
  ); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(
    to bottom,
    #ff8d8d 1%,
    #ffc1c1 100%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ff8d8d', endColorstr='#ffc1c1',GradientType=0 ); /* IE6-9 */
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
    background-color: #ff8d8d;
    height: 400px;
  }
  .description {
    margin-left: 20%;
    width: 50vw;
  }
  .projectDetail {
    width: 800px;
  }
}
</style>
