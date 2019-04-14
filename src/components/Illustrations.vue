<template>
  <div>
    <div class="projects-container">
      <div
        class="mobile-item item-container"
        v-for="illustration in illustrations"
        :key="illustration.title"
      >
        <router-link :to="`${illustration.link}`">
          <picture>
            <source type="image/webp" :srcset="`${illustration.webp}`" />
            <img :src="`${illustration.image}`" :alt="`${illustration.alt}`" />
          </picture>

          <div class="hover">
            <p class="project project_title">{{ illustration.title }}</p>
            <p class="project project_description">
              {{ illustration.description }}
            </p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Illustrations",
  data() {
    return {
      illustrations: [
        {
          title: "AirMax90 + Lego",
          description: "Concept: AirMax90",
          image: "../img/work/Illustrations/AirMax/AirMax_thumb.jpg",
          webp: "",
          alt: "AirMax90 + LEGO",
          link: "/work/Illustrations/AirMax90"
        },
        {
          title: "WIN FROM WITHIN",
          description: "Concept: Win From Within",
          image:
            "../img/work/Illustrations/winFromWithin/WinFromWithin_thumb.jpg",
          webp: "",
          alt: "WIN FROM WITHIN",
          link: "/work/Illustrations/WinFromWithin"
        },
        {
          title: "Jordan '94 Flu Game",
          description: "Concept: Jordan '94 Flu Game",
          image: "../img/work/Illustrations/Jordan/JordanFluGame_thumb.jpg",
          webp: "",
          alt: "Jordan '94 Flu Game",
          link: "/work/Illustrations/Jordan94"
        },
        {
          title: "Breaking Bad: WW",
          description: "Concept: Walter White",
          image: "../img/work/Illustrations/BrBa/WW_thumb.jpg",
          webp: "",
          alt: "Breaking Bad: Walter White",
          link: "/work/Illustrations/WalterWhite"
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
