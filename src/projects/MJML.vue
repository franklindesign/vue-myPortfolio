<template>
  <div class="mjml">
    <div class="projectImage"></div>
    <div class="description">
      <div class="container">
        <div class="productContainer">
          <v-img
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            src="/img/work/MJML/mjml.png"
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
          MJML is the only framework that makes responsive email easy. I have
          recreated a few emails based on other companies' promotional emails
          into MJML responsive email templates.
        </p>
      </div>
    </div>
    <div
      data-aos="fade-up"
      data-aos-duration="1500"
      data-aos-delay="500"
      data-aos-easing="ease-in-out"
      class="description"
    >
      <div class="mt-5">
        <h2>MJML Environment</h2>
        <p>
          The MJML app is similar to any code editor with a dark theme and a
          simple user interface. It also features a preview for desktop and
          mobile display.
        </p>
      </div>
    </div>
    <div class="container">
      <video controls autoplay loop>
        <source src="/img/work/MJML/ez_mjml.webm" type="video/webm" />
        <source src="/img/work/MJML/ez_mjml.mp4" type="video/mp4" />
        Sorry, your browser doesn't support embedded videos.
      </video>
    </div>
    <div
      data-aos="fade-up"
      data-aos-duration="1500"
      data-aos-delay="500"
      data-aos-easing="ease-in-out"
      class="description"
    >
      <div class="mt-5">
        <h2>MJML Examples</h2>
        <p>
          There are many ways to create MJML templates using standard head and
          body components. I have recreated a few of emails from Udemy, Amazon,
          and HBO to demonstrate the power and ease as MJML use cases. These
          templates can be downloaded from my
          <a
            href="https://github.com/franklindesign/MJML-templates"
            target="_blank"
            >github repository</a
          >. For additional information on MJML, go to
          <a href="http://mjml.io" target="_blank">mjml.io</a>.
        </p>
      </div>
    </div>
    <div class="container">
      <v-img
        v-for="image in images"
        :key="image"
        :src="`${image.src}`"
        class="imageBG"
      ></v-img>
    </div>
    <div class="container">
      <a
        href="https://github.com/franklindesign/MJML-templates"
        target="_blank"
      >
        <button class="buttonStyle">Get My MJML Templates</button>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projectName: "MJML Responsive Email Templates",

      images: [{ src: "/img/work/MJML/mjml_temps.jpg" }]
    };
  }
};
</script>

<style scoped>
video {
  width: 100%;
  height: auto;
}
.buttonStyle {
  width: 300px;
  margin: 10px;
  padding: 5px;
  transform: scale(1);
  background-color: #f2533b;
  border-radius: 50px;
  height: 50px;
}
.buttonStyle:hover {
  background-color: #fff;
  color: black;
  transform: scale(1.05);
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
  background-color: #f2533b;
  height: 250px;
}

/* desktop styles */
@media screen and (min-width: 768px) {
  .productContainer {
    width: 400px;
  }
  .product {
    margin-bottom: -350px;
    top: -350px;
  }
  .projectImage {
    background-color: #f2533b;
    height: 400px;
  }
  .description {
    margin-left: 20%;
    width: 50vw;
  }
}
</style>
