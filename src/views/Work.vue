<template>
  <div class="work">
    <h1 class="work">Work</h1>
    <div class="project-container">
      <div
        class="mobile-item item"
        v-for="project in projects"
        :key="project.title"
        :style="{ backgroundImage: `url('${project.image}')` }"
      >
        <div class="project">
          <p class="project_title">{{project.title}}</p>
          <p class="project_description">{{project.description}}</p>
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
          title: "Hibiki Sushi",
          description: "Santa Clarita's Local All-You-Can-Eat restaurant",
          image: "../img/default.jpg",
          color: "red"
        },
        {
          title: "Build Your Creativity",
          description: "Wendy's connectible Kid's Toy",
          image: "../img/default.jpg"
        },
        {
          title: "Bulma UI",
          description: "Component UI made in Adobe XD",
          image: "../img/default.jpg"
        },
        {
          title: "Daily UI",
          description: "Daily Challenges in User Interface",
          image: "../img/default.jpg"
        }
      ]
    };
  }
};
</script>


<style scoped>
.work {
  font-size: 1.5em;
  margin-top: 75px;
  margin-bottom: 25px;
  text-align: center;
}

@media screen and (max-width: 768px) {
  .mobile-item {
    width: 100%;
    height: 400px;
  }
  .item {
    position: relative;
  }

  .project-container {
    display: grid;
  }

  .project_title {
    width: 100%;
    position: absolute;
    bottom: 50px;
    color: white;
  }
  .project_description {
    width: 100%;
    position: absolute;
    bottom: 0px;
    color: white;
    font-size: 0.7em;
  }
  .project {
    background-color: black;
  }
}

@media screen and (min-width: 768px) {
  .work {
    text-align: center;
    margin-top: 150px;
    margin-bottom: 100px;
    font-size: 2em;
  }
  .project-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: minmax(600px, auto);
    background-color: black;
  }

  .item {
    position: relative;
    opacity: 0.7;
    background-size: cover;
  }
  .item:hover {
    opacity: 1;
    cursor: pointer;
  }
  .project_title {
    width: 100%;
    position: absolute;
    bottom: 50px;
    color: white;
  }
  .project_description {
    width: 100%;
    position: absolute;
    bottom: 0;
    color: white;
    font-size: 0.7em;
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
