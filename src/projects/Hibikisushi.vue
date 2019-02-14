<template>
  <div class="hibikisushi">
    <v-parallax
      src="https://source.unsplash.com/1600x900/?sushi"
      height="600"
    ></v-parallax>

    <div class="description">
      <h1 class="mb-3">Hibiki Sushi</h1>
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
          <li>Branding</li>
          <li>Print</li>
          <li>Web Design</li>
        </ul>
      </div>
    </div>
    <v-img contain src="https://source.unsplash.com/1600x900/?food"></v-img>
  </div>
</template>

<script>
export default {
  name: "hibikisushi"
};
</script>

<style scoped>
.description {
  margin: 25px;
  padding: 5px;
  width: 75vw;
}

li {
  margin: 5px;
}
@media screen and (min-width: 768px) {
  .description {
    margin-left: 20%;
    width: 50vw;
  }
}
</style>
