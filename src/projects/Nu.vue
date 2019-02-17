<template>
  <div class="nu">
    <div class="projectImage"></div>

    <div class="description">
      <h1 class="mb-3">{{projectName}}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
        tempora. Totam suscipit quibusdam animi impedit. Facilis dolore ad unde
        reprehenderit voluptas, quisquam nisi, consequuntur ratione facere,
        cumque possimus laboriosam accusantium! Lorem ipsum dolor, sit amet
        consectetur adipisicing elit. Atque praesentium, repellendus eligendi
        odio enim, voluptate ab earum quod quae excepturi incidunt, non illum
        ratione dignissimos ea ad recusandae tempore harum. Lorem ipsum dolor
        sit, amet consectetur adipisicing elit. Vitae, magnam magni consectetur
        id provident cupiditate odit numquam itaque eius alias possimus vel
        exercitationem? Libero illo suscipit quas labore tenetur enim?
      </p>

      <div class="services mt-5">
        <h3>Services:</h3>
        <ul>
          <li v-for="service in services" :key="service">{{service.service}}</li>
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
      projectName: "Nu Whey Protein",
      services: [{ service: "Packaging" }, { service: "Branding" }]
    };
  }
};
</script>

<style scoped>
.nu {
  z-index: 2;
}
.projectImage {
  background-image: url("https://source.unsplash.com/1600x600/?fitness");
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
