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
          title: "Disney+ with React/NextJS",
          description:
            "A Disney+ App on desktop, built with React/Next JS Framework",
          image: "../img/work/DisneyPlus2019/disneyplus2019_thumb.jpg",
          webp: " ",
          alt: "Disney Plus Clone",
          link: "/demo/disneyplus"
        },
        {
          title: "MJML Email Templates",
          description: "Responsive email templates built with MJML",
          image: "../img/work/MJML/MJML.jpg",
          webp: " ",
          alt: "Responsive email templates built with MJML",
          link: "/work/mjml"
        },

        {
          title: "Build Your Creativity",
          description: "Wendy's 2-in-1 Smart Links Kids Toys",
          image: "../img/work/BYC/byc_project.png",
          webp: "../img/work/BYC/byc_project.webp",
          alt: "Build Your Creativity project with STROTTMAN",
          link: "/work/buildyourcreativity"
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
          title: "Hibiki Sushi",
          description: "Santa Clarita's All You Can Eat Restaurant",
          image: "../img/work/HIBIKI/hibiki_project.png",
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
          title: "ClientC (Demo)",
          description: "Client Managing App",
          image: "../img/work/ClientC/clientc_thumb.jpg",
          webp: "",
          alt: "ClienC (Demo)",
          link: "/demo/clientc"
        },

        {
          title: "Illustrations",
          description: "Various Experimental Illustrations",
          image: "../img/work/Illustrations/illustrations_thumbs.jpg",
          webp: "",
          alt: "Various Experimental Illustrations",
          link: "/work/illustrations"
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
