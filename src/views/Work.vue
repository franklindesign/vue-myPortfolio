<template>
  <div>
    <v-container class="mt-5">
      <h1>Work</h1>
      <h2>A selection of projects.</h2>
    </v-container>
    <div class="project-container">
      <div
        class="mobile-item item"
        v-for="project in projects"
        :key="project.title"
        :style="{ backgroundImage: `url('${project.image}')` }"
      >
        <div class="hover">
          <p class="project project_title">{{ project.title }}</p>
          <p class="project project_description">{{ project.description }}</p>
        </div>
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
          image: "../img/work/BYC/work_byc_small.jpg"
        },
        {
          title: "Hibiki Sushi",
          description: "Santa Clarita's All You Can Eat Restaurant",
          image: "../img/work/BYC/work_byc_small.jpg"
        },
        {
          title: "Bulma UI",
          description: "Component UI made in Adobe XD",
          image: "../img/work/BYC/work_byc_small.jpg"
        },
        {
          title: "Daily UI",
          description: "Daily Challenges in User Interface",
          image: "../img/work/BYC/work_byc_small.jpg"
        }
      ]
    };
  }
};
</script>

<style scoped>
.work {
  margin-top: 75px;
  margin-bottom: 25px;
}
.mobile-item {
  height: 100%;
}

@media screen and (max-width: 768px) {
  .mobile-item {
    width: 100%;
    height: 350px;
  }
  .item {
    position: relative;
    background-position: center center;
    background-size: cover;
  }

  .project-container {
    display: grid;
  }

  .project_title {
    width: 100%;
    height: 25px;
    position: absolute;
    font-weight: bold;
    bottom: 35px;
    color: white;
    background-color: black;
    padding-top: 10px;
    padding-bottom: 25px;
  }
  .project_description {
    width: 100%;
    height: 50px;
    position: absolute;
    bottom: -15px;
    color: white;
    font-size: 1em;
    padding-top: 10px;
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
  }
  .work {
    margin-top: 150px;
    margin-bottom: 100px;
    font-size: 1em;
  }
  .project-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: minmax(600px, auto);
  }

  .item {
    position: relative;
    height: 100%;
    background-position: center center;
    background-size: cover;
  }
  .item:hover {
    cursor: pointer;
  }
  .project_title {
    width: 100%;
    position: absolute;
    bottom: 50%;
    color: white;
    font-weight: bold;
  }
  .project_description {
    width: 100%;
    position: absolute;
    bottom: 42%;
    color: white;
    font-size: 1.5em;
    height: 50px;
  }
  .project {
    width: 100%;
    text-align: center;
  }

  /* .item1 {
    grid-column: 1 / 2;
    grid-row: 1;
    background-color: aquamarine;
  }
  .item2 {
    grid-column: 2 / 2;
    grid-row: 1;
    background-color: blueviolet;
  }
  .item3 {
    grid-column: 2 / 1;
    grid-row: 2;
    background-color: burlywood;
  }
  .item4 {
    grid-column: 2 / 2;
    grid-row: 2;
    background-color: red;
  } */
}
</style>
