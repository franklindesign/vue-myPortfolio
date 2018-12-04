<template>
  <div class="about">
    <p
      class="me"
    >Franklin Manghi is a graphic & web designer living in Los Angeles. Currently working as a freelancer, designing user interface, creating product packaging, developing websites and campaigns for small businesses.</p>
    <p class="what">WHAT I DO</p>
    <p
      class="me"
    >I help businesses by creating and increasing brand awareness and pushing products into users' hands.</p>
  </div>
</template>

<style scoped>
.what {
  padding: 5px;
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
  font-size: 2em;
  line-height: 1.25em;
}

@media screen and (min-width: 768px) {
  .me {
    font-size: 5em;
  }
  .what {
    font-size: 1em;
    padding: 10px;
  }
}
</style>
