<template>
  <div class="grid-container">
    <div class="grid-item-1 mb-2">
      <strong>
        Franklin Manghi
        <br />manghi@gmail.com <br />Graphic/Web Designer
      </strong>
    </div>

    <div class="grid-item-space"></div>
    <div class="grid-item-4 row-title row-bottom-spacing">
      <strong>EXPERIENCE</strong>
    </div>

    <div class="grid-item-6">
      <p class="column-spacing">
        <strong>
          <a href="http://www.hibikisushi.net" target="_blank"
            >Hibiki Sushi Inc.</a
          >
        </strong>
      </p>
      <p>
        <i>Graphic Designer</i>
      </p>
      <p>February 2014 – Present</p>
      <p class="mb-4">
        Conceptualized and designed weekly email newsletters, updating
        restaurant menu with a modern look, developed and maintained website and
        social media channels, drive local awareness and engagement through
        mail-in deliverables for local print magazines. Connected and created
        accounts with popular food delivery services.
      </p>
      <hr />
    </div>

    <div class="grid-item-8">
      <p class="column-spacing">
        <strong>
          <a href="http://strottman.com/" target="_blank">STROTTMAN</a>
        </strong>
      </p>
      <p>
        <i>Freelance Graphic Designer</i>
      </p>
      <p>June 2016 – June 2016</p>
      <p class="mb-4">
        Partner closely with the creative department in terms of meeting
        deadlines necessary for timely delivered of projects and creative
        assets. Assisted in developing and maintaining the creative look and
        feel for all rounds of concepts. Ensured stages of concepts adhere to
        project requirements, objectives, and timelines upholding brand
        standards across all projects.
      </p>
      <hr />
    </div>

    <div class="grid-item-10">
      <p class="column-spacing">
        <strong>NU Whole Superfood</strong>
      </p>
      <p>
        <i>Lead Product Designer</i>
      </p>
      <p>December 2013 – January 2015</p>
      <p class="mb-4">
        Partnering with CEO and project manager to create a product focused on
        delivering healthier choice of nutritional products. I helped produced a
        product label design and assisted in marketing campaigns with
        deliverables in all web and print applications.
      </p>
      <hr />
    </div>

    <div class="grid-item-12">
      <p class="mt-1">
        <strong>Freelance Graphic Designer at Franklin Design</strong>
      </p>
      <p>October 2007 – Present</p>
      <p class="mb-4">
        As a freelancer, I have worked alongside small business owners and
        entrepreneurs in creating consumer products from concept to finish and
        created additional deliverables for marketing.
      </p>
      <hr />
    </div>
    <div class="grid-item-space"></div>
    <div class="row-title row-bottom-spacing">
      <strong>EDUCATION</strong>
    </div>

    <div>
      <p>
        <i>Bachelor of Arts (B.A.), Graphic Design</i>
      </p>
      <p>
        <strong>
          <a href="http://www.csun.edu" target="_blank" class="csun"
            >California State University, Northridge</a
          >
        </strong>
      </p>
    </div>
    <div class="grid-item-space"></div>
    <div class="row-title row-bottom-spacing">
      <strong>CERTIFICATIONS</strong>
    </div>
    <div class="cert column-spacing">
      <p>
        <i>
          Responsive Web Design
          <a
            href="https://www.freecodecamp.org/certification/franklindesign/responsive-web-design"
            target="_blank"
            >(See Certifcation)</a
          >
        </i>
      </p>
      <p class="fcc">freeCodeCamp</p>
    </div>
    <div class="cert column-spacing">
      <p>
        <i>
          Essentials in JavaScript ES6 - A Fun and Clear Introduction
          <a
            href="https://www.udemy.com/certificate/UC-5Q7CO770/"
            target="_blank"
            >(See Certification)</a
          >
        </i>
      </p>
      <p class="fcc">Udemy</p>
    </div>
    <div class="cert column-spacing">
      <p>
        <i>
          Vue JS 2 - The Complete Guide (incl. Vue Router & Vuex)
          <a
            href="https://www.udemy.com/certificate/UC-8D07XGHA/"
            target="_blank"
            >(See Certifcation)</a
          >
        </i>
      </p>
      <p class="fcc">Udemy</p>
    </div>
    <div class="cert column-spacing">
      <p>
        <i>
          Nuxt.js - Vue.js on Steroids
          <a
            href="https://www.udemy.com/certificate/UC-FTZVOXVD/"
            target="_blank"
            >(See Certifcation)</a
          >
        </i>
      </p>
      <p class="fcc">Udemy</p>
    </div>
    <div class="grid-item-space"></div>
    <div class="row-title">
      <strong>SKILLS</strong>
    </div>
    <div class="cert column-spacing">
      <span v-for="skill in skills" :key="skill">{{ skill + ", " }}</span>
    </div>
    <div class="grid-item-space"></div>
    <div class="row-title">
      <strong>TOOLS AND SOFTWARE</strong>
    </div>

    <div>
      <div class="cert column-spacing">
        <span v-for="tool in tools" :key="tool">{{ tool + ", " }}</span>
      </div>
    </div>

    <div class="grid-item-space"></div>
    <div class="row-title">
      <strong>INTERESTS</strong>
    </div>
    <div class="cert column-spacing">
      <span v-for="interest in interests" :key="interest">{{
        interest + ", "
      }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      skills: [
        "Graphic Design",
        "App Design",
        "CSS",
        "Git",
        "HTML",
        "Illustration",
        "Interface Design",
        "Low/High Fidelity",
        "Modern Javascript",
        "Print Production",
        "Product Design",
        "Prototyping",
        "Typography",
        "UI Design",
        "UX Design",
        "Web Design",
        "Wire Flows",
        "Wireframing"
      ],
      tools: [
        "Adobe Creative Cloud (Illustrator, Photoshop, InDesign, AfterEffects, XD)",
        "Figma",
        "InVision Studio",
        "Visual Studio Code",
        "Principle",
        "Framer X",
        "UXPin",
        "SketchApp"
      ],
      interests: ["NBA", "Weight Lifting", "Video Games"]
    };
  }
};
</script>

<style scoped>
.line {
  color: red;
}
.fcc {
  font-weight: bold;
}
p {
  margin: 0;
}

.csun {
  font-weight: bold;
}

@supports (display: grid) {
  .grid-container {
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: auto;
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    width: 800px;
    margin-bottom: 50px;
    margin-top: 50px;
    background-color: rgb(24, 24, 24);
    padding: 25px;
  }
  .grid-item-8 {
    grid-column: 2 / 2;
  }
  .grid-item-10 {
    grid-column: 2 / 2;
  }
  .grid-item-12 {
    grid-column: 2 / 2;
  }
  .grid-item-space {
    grid-column: 2 / 2;
    margin: 10px;
  }
  .cert {
    grid-column: 2 / 2;
  }
}

/* mobile styles */
@media screen and (max-width: 768px) {
  .grid-container {
    display: flex;
    flex-direction: column;
    width: 90vw;
    margin-bottom: 50px;
  }
  .row-title {
    margin-top: 20px;
  }
  .column-spacing {
    margin-top: 20px;
  }
  .row-bottom-spacing {
    margin-bottom: 20px;
  }
}
</style>
