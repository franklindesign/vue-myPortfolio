<template>
  <div>
    <div class="projects-container">
      <div
        class="mobile-item item-container"
        v-for="project in projects"
        :key="project.title"
      >
        <router-link :to="`${project.link}`">
          <picture>
            <source type="image/webp" :srcset="`${project.webp}`" />
            <img :src="`${project.image}`" :alt="`${project.alt}`" />
          </picture>

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
          description: "Wendy's 2-in-1 Smart Links Kids Toys",
          image: "../img/work/BYC/byc_project.png",
          webp: "../img/work/BYC/byc_project.webp",
          alt: "Build Your Creativity project with STROTTMAN",
          link: "/work/buildyourcreativity"
        },
        {
          title: "Hibiki Sushi",
          description: "Santa Clarita's All You Can Eat Restaurant",
          image: "../img/work/HIBIKI/hibiki_project.jpg",
          webp: "../img/work/HIBIKI/hibiki_project.webp",
          alt: "Hibiki Sushi & Bar Project",
          link: "/work/hibikisushi"
        },
        {
          title: "TANGERINES",
          description: "Orange County Field Hockey Club",
          image: "../img/work/OCFHC/tangerines_project.png",
          webp: "../img/work/OCFHC/tangerines_project.webp",
          alt: "Project Tangerines",
          link: "/work/tangerines"
        },
        {
          title: "NU Superfood",
          description: "Nu Whey Protein",
          image: "../img/work/NU/nu_project.png",
          webp: "../img/work/NU/nu_project.webp",
          alt: "Package Design for NU",
          link: "/work/nu"
        },
        {
          title: "Coming Soon",
          description: "New Project",
          image: "",
          webp: "",
          alt: "",
          link: "/"
        },
        {
          title: "Coming Soon",
          description: "New Project",
          image: "",
          webp: "",
          alt: "",
          link: "/"
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
    background-color: black;
  }

  .projects-container {
    display: grid;
  }

  .project_title {
    font-weight: bold;
    bottom: 10%;
  }
  .project_description {
    bottom: 0;
    font-size: 1em;
  }
  .project {
    padding: 10px;
    position: absolute;
    width: 100%;
    text-align: center;
    color: white;
    background-color: black;
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
    top: 40%;
    font-weight: bold;
  }
  .project_description {
    top: 45%;
    font-size: 1.5em;
    height: 50px;
  }
  .project {
    color: white;
    position: absolute;
    width: 100%;
    text-align: center;
  }
}
</style>
