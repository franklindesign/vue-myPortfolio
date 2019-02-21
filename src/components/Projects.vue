<template>
  <div>
    <div class="projects-container">
      <div class="mobile-item item-container" v-for="project in projects" :key="project.title">
        <router-link :to="`${project.link}`">
          <img :src="`${project.image}`">

          <div class="hover">
            <p class="project project_title">{{ project.title }}</p>
            <p class="project project_description">{{ project.description }}</p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          title: "Build Your Creativity",
          description: "Wendy's Connectible Kid's Toy",
          image: "../img/work/BYC/work_byc_small.jpg",
          link: "/work/byc"
        },
        {
          title: "Hibiki Sushi",
          description: "Santa Clarita's All You Can Eat Restaurant",
          image: "../img/work/HIBIKI/work_hibiki_small.jpg",
          link: ""
        },
        {
          title: "TANGERINES",
          description: "Orange County Field Hockey Club",
          image: "../img/work/OCFHC/work_ocfhc_small.jpg",
          link: "/work/tangerines"
        },
        {
          title: "NU Superfood",
          description: "Nu Whey Protein",
          image: "../img/work/NU/work_nu_small.jpg",
          link: "/work/nu"
        }
      ]
    };
  }
};
</script>

<style scoped>
/* mobile styles */
@media screen and (max-width: 768px) {
  .mobile-item {
    height: 350px;
  }
  .item-container,
  img {
    position: relative;
    width: 100vw;
    background-position: center;
  }

  .projects-container {
    display: grid;
  }

  .project_title {
    width: 100%;
    position: absolute;
    font-weight: bold;
    bottom: 10%;
    color: white;
    background-color: black;
    padding: 10px;
  }
  .project_description {
    width: 100%;

    position: absolute;
    bottom: 0;
    color: white;
    font-size: 1em;
    padding: 10px;
    background-color: black;
  }
  .project {
    text-align: center;
  }
}
/* desktop styles */
@media screen and (min-width: 768px) {
  .hover {
    opacity: 0;
  }
  .hover:hover {
    opacity: 1;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.8);
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
  .work {
    margin-top: 150px;
    margin-bottom: 100px;
    font-size: 1em;
  }
  .projects-container {
    overflow: hidden;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: minmax(20%, 35vmax);
    position: relative;
  }
  .projects-container > div {
    overflow: hidden;
    position: relative;
    width: 100%;
  }

  .projects-container img {
    opacity: 1;
    transform: scale(1);
    transform-origin: 50% 50%;
    transition: all 0.5s ease-in-out;
    width: 100%;
    display: block;
    position: absolute;
  }

  .projects-container div:hover img {
    opacity: 0.8;
    transform: scale(1.1);
  }

  .project_title {
    width: 100%;
    position: absolute;
    top: 40%;
    color: white;
    font-weight: bold;
  }
  .project_description {
    width: 100%;
    position: absolute;
    top: 45%;
    color: white;
    font-size: 1.5em;
    height: 50px;
  }
  .project {
    width: 100%;
    text-align: center;
  }
}
</style>
