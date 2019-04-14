<template>
  <div class="byc">
    <div class="projectImage"></div>
    <div class="description">
      <div class="container">
        <div class="productContainer">
          <v-img
            src="/img/work/ClientC/clientc_header.png"
            class="product"
          ></v-img>
        </div>
      </div>

      <h1 class="mb-3">{{ projectName }}</h1>

      <p class="projectDetail">
        ClientC is a small conceptual app for freelancers to manage their
        clients. It features an authorization login/signup to access the client
        dashboard, with given access a logged user is able to create, read,
        update, and delete listed clients.
      </p>
      <p>
        <i
          >Web Technologies: ReactJS, Redux, Firebase/Firestore,
          Boostrap/Reactstrap, Form Validation using RegEx</i
        >
      </p>

      <div class="container pa-0 ma-0">
        <iframe
          src="https://player.vimeo.com/video/330283186"
          width="800"
          height="330"
          frameborder="0"
          allow="autoplay; fullscreen"
          allowfullscreen
        ></iframe>
      </div>
      <div class="mt-3 mb-5">
        <button>
          <a
            href="https://reactfreelancemanager.firebaseapp.com/"
            target="_blank"
          >
            <button class="buttonStyle">View Live Demo</button>
          </a>
        </button>
        <button>
          <a
            href="https://reactfreelancemanager.firebaseapp.com/"
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
      projectName: "ClientC (concept)"
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
  background-color: #ff882d;
  transform: scale(1.1);
  transition: all 300ms ease-out;
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
  background: #ff8d8d; /* Old browsers */
  background: -moz-linear-gradient(
    top,
    #ff3e3b 1%,
    #ff882d 100%
  ); /* FF3.6-15 */
  background: -webkit-linear-gradient(
    top,
    #ff3e3b 1%,
    #ff882d 100%
  ); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(
    to bottom,
    #ff3e3b 1%,
    #ff882d 100%
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
