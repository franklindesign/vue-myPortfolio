<template>
  <div class="byc">
    <div class="projectImage"></div>
    <div class="description">
      <div class="container">
        <div class="productContainer">
          <v-img
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            src="/img/work/HIBIKI/hibiki_ipad_iphone.png"
            class="product"
          ></v-img>
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="1500"
        data-aos-easing="ease-in-out"
      >
        <h1 class="mb-5">{{ projectName }}</h1>
        <div>
          <h2>Context</h2>
          <p>
            Hibiki Sushi & Bar is local mom & pop Asian fusion restaurant
            featuring All You Can Eat with an extensive menu of over 100 items.
            The restaurant is of large scale that can sit over 100 customers.
          </p>
          <p>
            Originally contacted to redesign the restaurant menu for Hibiki
            Sushi & Bar and as well as refreshing the company's identity,
            creating a whole new and modern look.
          </p>
          <p>
            As most family owned Asian restaurants, the designs are mostly done
            in Microsoft Word or non-design tools and owners do not have any
            expertise in designing their own brand.
          </p>
        </div>
        <div class="mt-5">
          <h2>The Objective</h2>
          <p>
            The purpose behind the redesign of Hibiki's identity was to give it
            a modern, clean look and as well as provide visibility and or online
            presence.
          </p>
        </div>
        <div class="mt-5">
          <h2>The Strategy</h2>
          <p>
            To focus on creating a new look, I have redesigned the restaurant
            menu with even adding more items than previous years. Increased
            online presence by developing a website that would have an online
            form that lets users sign up to email newsletters that would inform
            subscribers on special deals and coupons. I have also created social
            media channels for user-based engaged posts.
          </p>
        </div>
      </div>
    </div>
    <div
      data-aos="fade-up"
      data-aos-duration="1500"
      data-aos-easing="ease-in-out"
      data-aos-delay="500"
    >
      <div class="mt-5 description">
        <h2>Logo</h2>
        <p>
          The Hibiki Sushi & Bar logo features two original colors, a variant of
          a darker red and blue background for the subtitle. The restaurant
          originally had an outdoor neon sign with the same italicized
          sans-serif font. I have taken the step to refined the logo that would
          be accessible for all media.
        </p>
      </div>
      <v-img :src="`${logo.src}`"></v-img>
    </div>
    <div
      data-aos="fade-up"
      data-aos-duration="1500"
      data-aos-easing="ease-in-out"
      data-aos-delay="500"
    >
      <div class="description">
        <h2>Restaurant Menu</h2>
        <p>
          The redesigned menu featured many of the items with filled and cropped
          images and item descriptions. I used a dark background, as food images
          tend to flourish and look more appetizing. For typography, I used a
          script for large headers and sans-serif for body paragraphs. I used a
          four-column flex grid for each page.
        </p>
      </div>
      <v-img
        v-for="image in images"
        :key="image.title"
        :src="`${image.src}`"
        class="imageBG"
      ></v-img>
    </div>
    <div
      data-aos="fade-up"
      data-aos-duration="1500"
      data-aos-easing="ease-in-out"
    >
      <div class="description">
        <h2>Email Newsletters</h2>
        <p>
          Engagement with customers is important. Customers are able to sign up
          for email newsletters via sign up sheet or online form through the
          website to receive special discounts and offers. Collecting users'
          data provided a lot of valuable information by defining and adjust
          e-mailing strategy (content, timeframe, promotion…). I used mailchimp
          as a marketing automation platform and an email marketing service. I
          have managed to used Mailchimp for ads connected through other social
          media channels.
        </p>
      </div>

      <v-img
        v-for="newsletter in newsletters"
        :src="`${newsletter.src}`"
        :key="newsletter.title"
      ></v-img>
    </div>
    <div
      data-aos="fade-up"
      data-aos-duration="1500"
      data-aos-easing="ease-in-out"
    >
      <div class="description">
        <h2>Website Design & Development</h2>
        <p>
          The first version of the website was a Wordpress theme, I didn't fall
          in love it. It was bloated with unused javascript. A year later, I've
          come to learn modern javascript starting with Vue Javascript
          framework. It was intuitive to learn and learning the basics was
          enough to develop the current Hibiki website. The Hibikisushi.net
          features a reactive and dynamic routing, page refreshes are
          non-existant allowing better user experiences.
        </p>
        <v-img
          class="mb-5"
          v-for="device in devices"
          :key="device.id"
          :src="`${device.src}`"
        ></v-img>
        <div class="container">
          <a href="http://www.hibikisushi.net" target="_blank">
            <button class="buttonStyle">View Live Website</button>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projectName: "Hibiki Sushi & Bar",

      logo: { src: "/img/work/HIBIKI/hibiki_logo.jpg" },
      images: [
        {
          title: "Restaurant Menu",
          src: "/img/work/HIBIKI/hibiki_restaurantMenu.png"
        },
        {
          title: "Takeout Menu",
          src: "/img/work/HIBIKI/hibiki_take-outMenu.jpg"
        }
      ],
      newsletters: [
        {
          title: "2019 Newsletter",
          src: "/img/work/HIBIKI/hibiki-newsletters-2019A.jpg"
        },
        {
          title: "Mailchimp",
          src: "/img/work/HIBIKI/hibiki_project_mailchimp.jpg"
        }
      ],
      devices: [
        {
          id: 1,
          title: "Hibikisushi.net (desktop)",
          src: "/img/work/HIBIKI/hibiki_desktop.png"
        },
        {
          id: 2,
          title: "Hibikisushi.net (mobile)",
          src: "/img/work/HIBIKI/hibiki_mobile.png"
        }
      ]
    };
  }
};
</script>

<style scoped>
.buttonStyle {
  width: 300px;
  margin: 10px;
  padding: 5px;
  transform: scale(1);
  background-color: #323232;
  border-radius: 50px;
  height: 50px;
}
a {
  color: rgb(199, 199, 199);
}
a:hover {
  color: black;
}
.buttonStyle:hover {
  background-color: #ff8d8d;
  transform: scale(1.1);
  transition: all 300ms ease-out;
}
.imageBG {
  background-color: rgb(6, 6, 6);
}
.projectDetail {
  font-size: 1.25em;
}
.container {
  display: flex;
  align-items: center;
  justify-content: center;
}
.productContainer {
  width: 250px;
}

.description {
  margin: 25px;
  padding: 5px;
  width: 90vw;
  line-height: 2em;
}

li {
  margin: 5px;
  list-style: none;
}
ul {
  padding: 0;
}

.product {
  width: 100%;
  top: -200px;
  margin-bottom: -200px;
}
.projectImage {
  height: 250px;
  /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#ff8d8d+1,ffc1c1+100 */
  background: #ff8d8d; /* Old browsers */
  background: -moz-linear-gradient(
    top,
    #ff8d8d 1%,
    #ffc1c1 100%
  ); /* FF3.6-15 */
  background: -webkit-linear-gradient(
    top,
    #ff8d8d 1%,
    #ffc1c1 100%
  ); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(
    to bottom,
    #ff8d8d 1%,
    #ffc1c1 100%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ff8d8d', endColorstr='#ffc1c1',GradientType=0 ); /* IE6-9 */
}

/* desktop styles */
@media screen and (min-width: 768px) {
  .productContainer {
    width: 300px;
  }
  .product {
    margin-bottom: -350px;
    top: -350px;
  }
  .projectImage {
    background-color: #ff8d8d;
    height: 400px;
  }
  .description {
    margin-left: 20%;
    width: 50vw;
  }
  .projectDetail {
    width: 800px;
  }
}
</style>
