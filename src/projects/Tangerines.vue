<template>
  <div class="tangerines">
    <div class="projectImage"></div>

    <div class="description">
      <h1 class="mb-3">{{ projectName }}</h1>
      <p>project info</p>

      <div class="services mt-5">
        <h3>Services:</h3>
        <ul>
          <li v-for="service in services" :key="service">
            {{ service.service }}
          </li>
        </ul>
      </div>
    </div>
    <v-img contain src="https://source.unsplash.com/1600x900/?fit"></v-img>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projectName: "Tangerines",
      services: [{ service: "Web Design" }, { service: "Identity" }]
    };
  }
};
</script>

<style scoped>
.projectImage {
  background-image: url("https://source.unsplash.com/1600x600/?soccer");
  height: 550px;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.description {
  margin: 25px;
  padding: 5px;
  width: 75vw;
}

li {
  margin: 5px;
  list-style: none;
}
ul {
  padding: 0;
}
@media screen and (min-width: 768px) {
  .description {
    margin-left: 20%;
    width: 50vw;
  }
}
</style>
