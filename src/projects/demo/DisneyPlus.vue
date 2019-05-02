<template>
  <div>
    <div class="projectImage"></div>
    <div class="description">
      <div class="container">
        <div class="productContainer">
          <v-img
            src="/img/work/DisneyPlus2019/disneyplus_header.png"
            class="product"
          ></v-img>
        </div>
      </div>

      <h1 class="mb-3">{{ projectName }}</h1>

      <p class="projectDetail">
        After seeing Disney's Investor preview of the Disney Plus streaming app.
        I was inspired to recreate the app with NextJS (React JavaSript
        Framework) and TailwindCSS. Using a utility-first CSS made it a breeze
        in styling the user interface as shown on the Disney preview.
        Additionally added multiple pages and a movie page. Note: this is only a
        demo, not a production-ready app.
      </p>
      <p>
        <i
          >Dependencies: Next, React, TailwindCSS, React-Slick,
          Slick-Carousel</i
        >
      </p>
      <div class="mt-5">
        <v-img
          class="mt-2 mb-2"
          v-for="image in images"
          :src="`${image.src}`"
          :key="image"
        ></v-img>
      </div>

      <div class="mt-3 mb-5">
        <button>
          <a href="https://disneyplus2019.netlify.com/" target="_blank">
            <button class="buttonStyle">View Live Demo</button>
          </a>
        </button>
        <button>
          <a
            href="https://github.com/franklindesign/nextjs-tailwindcss-disneyplus-clone"
            target="_blank"
          >
            <button class="buttonStyle">View Repository on Github</button>
          </a>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projectName: "Disney Plus App (Clone)",
      images: [
        {
          src: "/img/work/DisneyPlus2019/dp1.jpg"
        },
        {
          src: "/img/work/DisneyPlus2019/dp2.jpg"
        },
        {
          src: "/img/work/DisneyPlus2019/dp2.5.jpg"
        },
        {
          src: "/img/work/DisneyPlus2019/dp2.6.jpg"
        },
        {
          src: "/img/work/DisneyPlus2019/dp3.jpg"
        },
        {
          src: "/img/work/DisneyPlus2019/dp4.jpg"
        },
        {
          src: "/img/work/DisneyPlus2019/dp4.5.jpg"
        },
        {
          src: "/img/work/DisneyPlus2019/dp5.jpg"
        },
        {
          src: "/img/work/DisneyPlus2019/dp0.1.jpg"
        },
        {
          src: "/img/work/DisneyPlus2019/dp0.2.jpg"
        }
      ]
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
  background-color: #00fbf8;
  transform: scale(1.1);
  transition: all 300ms ease-out;
  color: white;
}
.imageBG {
  background-color: rgb(6, 6, 6);
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
  background: #0058cf; /* Old browsers */
  background: -moz-linear-gradient(
    top,
    #0058cf 1%,
    #00fbf8 100%
  ); /* FF3.6-15 */
  background: -webkit-linear-gradient(
    top,
    #0058cf 1%,
    #00fbf8 100%
  ); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(
    to bottom,
    #0058cf 1%,
    #00fbf8 100%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ff8d8d', endColorstr='#ffc1c1',GradientType=0 ); /* IE6-9 */
}

/* desktop styles */
@media screen and (min-width: 768px) {
  .productContainer {
    width: 400px;
    margin-left: 15%;
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
