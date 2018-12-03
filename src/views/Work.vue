<template>
  <div class="work">
    <h1 class="work">Work</h1>
    <div class="project-container"> 
      <div class="mobile-item item" v-for="project in projects" :key="project.title" :style="{ backgroundImage: `url('${project.image}')` }">{{project.title}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          title: "project1",
          description: "description1",
          image: "https://picsum.photos/600/600/?random"
        },
        {
          title: "project2",
          description: "description2",
          image: "https://picsum.photos/600/600/?random"
        },
        {
          title: "project3",
          description: "description3",
          image: "https://picsum.photos/600/600/?random"
        },
        {
          title: "project4",
          description: "description4",
          image: "https://picsum.photos/600/600/?random"
        },
        {
          title: "project5",
          description: "description5",
          image: "https://picsum.photos/600/600/?random"
        },
        {
          title: "project6",
          description: "description6",
          image: "https://picsum.photos/600/600/?random"
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
    width: 100vw;
    height: 400px;
    background-color: aquamarine;
  }
  .project-container {
    display: grid;
    grid-auto-rows: minmax(300px, auto);
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
    opacity: 1;
    background-size: cover;
  }
  .item:hover {
    opacity: 0.7;
    cursor: pointer;
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
