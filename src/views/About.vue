<template>
  <div class="about">
    <p
      class="me"
    >Franklin Manghi is a graphic & web designer living in Los Angeles. Currently working as a freelancer, designing user interface, creating product packaging, developing websites and campaigns for small businesses.</p>
    <p class="what">WHAT I DO</p>
    <p
      class="me"
    >Helping businesses with creating, increasing brand awareness, and pushing products into users' hands.</p>
  </div>
</template>

<style scoped>
/* mobile styles */
.what {
  padding: 15px;
  color: white;
  background-color: black;
  width: 100px;
  text-align: center;
  font-weight: bold;
  font-size: 0.7em;
}
.about {
  margin-left: 50px;
  margin-right: 50px;
  margin-top: 80px;
}
.me {
  font-size: 1.5em;
  line-height: 1.25em;
}

/* desktop styles */
@media screen and (min-width: 768px) {
  .me {
    font-size: 1.5em;
  }
  .what {
    font-size: 1em;
    padding: 10px;
  }
  .about {
    margin-left: 150px;
    margin-right: 150px;
  }
}
</style>