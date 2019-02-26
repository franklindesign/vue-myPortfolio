<template>
  <div>
    <v-container mt-5 class="topSpacing">
      <h1>Page Not Found</h1>
      Uh oh...Looks like you've followed a broken link or entered a URL that
      doesn't exist on my site.
      <p>
        <router-link to="/">
          <button class="goBack">Go Back</button>
        </router-link>
      </p>
    </v-container>
  </div>
</template>

<style scoped>
.goBack {
  background: rgb(48, 48, 48);
  margin-top: 20px;
  border-radius: 25px;
  width: 100px;
  color: white;
  padding: 8px;
}
.topSpacing {
  padding-top: 50px;
}
</style>
