<template>
  <v-container class="mt-5 topSpacing">
    <h1>Graphic Design</h1>
    <h4>Resources, books, and articles for graphic designers.</h4>

    <v-layout wrap mt-3>
      <v-flex
        xs12
        sm6
        md4
        lg4
        xl3
        v-for="source in sources"
        :key="source.title"
      >
        <a :href="`${source.link}`" target="_blank">
          <v-card style="margin: 5px;" class="sourceCard">
            <v-img
              class="white--text"
              height="200px"
              :src="`${source.image}`"
            ></v-img>
            <v-card-title>
              <div>
                <span class="grey--text">{{ source.subtitle }}</span>
                <br />
                <br />
                <span>{{ source.description }}</span>
                <br />
              </div>
            </v-card-title>
          </v-card>
        </a>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      sources: [
        {
          subtitle: "theFutur",
          description:
            "You’ll find recent podcasts, helpful guides, worksheets, and infographics to help you grow your design business from theFutur.",
          image: "../img/src/thefutur.jpg",
          link: "https://www.thefutur.com/resources/"
        },
        {
          subtitle: "The Win Without Pitching Manifesto",
          description:
            "A manifesto of business practices for those who sell ideas and advice, The Win Without Pitching Manifesto lays out twelve steps in the form of proclamations that owners of creative businesses can take to distance themselves from their competition, regain the high ground in their client relationships and learn to win business without first parting with their thinking or writing lengthy proposals. ",
          image: "../img/src/books/TheWinWithoutPitchingManifesto-book.jpg",
          link:
            "https://www.amazon.com/Win-Without-Pitching-Manifesto/dp/1999523504/"
        },
        {
          subtitle: "Creative Strategy and the Business of Design",
          description:
            "Creative Strategy and the Business of Design fills that void and teaches left-brain business skills to right-brain creative thinkers. Written by Douglas Davis.",
          image: "../img/src/books/creativeStrategyBusinessDesign.jpg",
          link: "https://www.amazon.com/gp/product/1440341559"
        },
        {
          subtitle:
            "The Brand Gap: How to Bridge the Distance Between Business Strategy and Design",
          description:
            "THE BRAND GAP is the first book to present a unified theory of brand-building.  Whereas most books on branding are weighted toward either a strategic or creative approach, this book shows how both ways of thinking can unite to produce a “charismatic brand”—a brand that customers feel is essential to their lives.",
          image: "../img/src/books/brandGAP.jpg",
          link:
            "https://www.amazon.com/Brand-Gap-Distance-Business-Strategy/dp/0321348109"
        },
        {
          subtitle:
            "This Is Marketing: You Can't Be Seen Until You Learn to See",
          description:
            "#1 Wall Street Journal Bestseller Instant New York Times Bestseller A game-changing approach to marketing, sales, and advertising. Seth Godin has taught and inspired millions of entrepreneurs, marketers, leaders, and fans from all walks of life, via his blog, online courses, lectures, and bestselling books.",
          image: "../img/src/books/thisismarketing.jpg",
          link:
            "https://www.amazon.com/This-Marketing-Cant-Until-Learn/dp/0525540830"
        },
        {
          subtitle:
            "How to Use Graphic Design to Sell Things, Explain Things, Make Things Look Better, Make People Laugh, Make People Cry, and (Every Once in a While) Change the World",
          description:
            "The first monograph, design manual, and manifesto by Michael Bierut, one of the world’s most renowned graphic designers—a career retrospective that showcases more than thirty-five of his most noteworthy projects for clients as the Brooklyn Academy of Music, the Yale School of Architecture, the New York Times, and Saks Fifth Avenue reflects eclectic enthusiasm and accessibility that has been the hallmark of his career.",
          image: "../img/src/books/howto.jpg",
          link:
            "https://www.amazon.com/Graphic-Design-Things-Explain-Better/dp/0062413902"
        },
        {
          subtitle: "Draplin Design Co.: Pretty Much Everything",
          description:
            "Esquire. Ford Motors. Burton Snowboards. The Obama Administration. While all of these brands are vastly different, they share at least one thing in com­mon: a teeny, little bit of Aaron James Draplin. Draplin is one of the new school of influential graphic designers who combine the power of design, social media, entrepreneurship, and DIY aesthetic to create a successful business and way of life.",
          image: "../img/src/books/draplin.jpg",
          link:
            "https://www.amazon.com/Draplin-Design-Co-Pretty-Everything-ebook/dp/B01DYIRDJK"
        }
      ]
    };
  }
};
</script>
