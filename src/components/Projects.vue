<template>
  <div id="projects-section" v-motion-slide-visible-once-top>
    <h2>My Projects</h2>
    <div class="carousel-container">
      <vue-carousel v-bind="carouselConfig">
        <vue-slide>
          <div>
            <Card class="card">
              <template #header>
                <div style="margin-top: 10px">
                  <Image src="./linerlytica-table.png" width="800px"></Image>
                </div>
              </template>
              <template #title>
                <h2>Container Ship Data Scraper</h2>
              </template>
              <template #subtitle>
                <div>
                  Made With: &nbsp;
                  <Icon style="vertical-align: middle;" icon="logos:python" width="2em" height="2em" /> &nbsp;
                  <Icon style="vertical-align: middle;" icon="logos:selenium" width="2em" height="2em" /> &nbsp;
                  <Image style="vertical-align: middle" src="./beautiful-soup.svg" height="48" />
                </div>
              </template>
              <template #content>
                Web scraper app to obtain cargo, maintenance, engine and location data regarding 20,000+ container ships. <br> Created for shipping data analysis company <a href="https://www.linerlytica.com/about" target="_blank">Linerlytica</a>. <br>Made with Python, Selenium and Beautiful Soup.
              </template>
              <template #footer>
                <Button style="margin-top: 10px;" severity="contrast" rounded size="large" @click="redirectToLink('https://github.com/shogun187/vessel-data-scraper')"><i class="pi pi-github" /><strong>Project</strong></Button>
              </template>
            </Card>
          </div>
        </vue-slide>

        <vue-slide>
          <div>
            <Card class="card">
              <template #header>
                <div style="margin-top: 10px">
                  <Image src="./telegram-bot2.png"></Image>
                </div>
              </template>
              <template #title>
                <h2>BTO Flat Tracker Telegram Bot</h2>
              </template>
              <template #subtitle>
                Made With: &nbsp;
                <Icon style="vertical-align: middle;" icon="logos:python" height="2em" /> &nbsp;
                <Icon style="vertical-align: middle;" icon="logos:telegram" width="2em" height="2em" /> &nbsp;
                <Icon style="vertical-align: middle;" icon="devicon:mongodb-wordmark" width="3em" height="3em" /> &nbsp;
                <Icon style="vertical-align: middle;" icon="skill-icons:docker" width="2em" height="2em" /> &nbsp;
                <Icon style="vertical-align: middle;" icon="logos:aws" width="2em" height="2em" /> &nbsp;
              </template>
              <template #content>
                <div style="margin-top: 10px;">
                  Telegram chatbot to monitor HDB flat uptake BTO flats.
                  <br>
                  Allows users to keep a watchlist of flats and notify users whenever a HDB flat is taken.
                  <br>
                  Built using Python, MongoDB, Docker and deployed on AWS.
                </div>
              </template>
              <template #footer>
                <Button style="margin-top: 10px" severity="contrast" rounded size="large" @click="redirectToLink('https://github.com/shogun187/BSB-BTO-Tracker')"><i class="pi pi-github"></i><strong>Project</strong></Button>
              </template>
            </Card>
          </div>
        </vue-slide>

        <vue-slide>
          <div>
            <Card class="card">
              <template #header>
                <div style="margin-top: 10px">
                  <Image src="./chat-app.png" width="650" ></Image>
                </div>
              </template>
              <template #title>
                <h2>Chat App</h2>
              </template>
              <template #subtitle>
                Made With:
                <Icon style="vertical-align: middle; margin-right: 8px" icon="logos:nodejs-icon" width="2em" height="2em" />
                <Icon style="vertical-align: middle; margin-right: 8px" icon="skill-icons:html" width="2em" height="2em" />
                <Icon style="vertical-align: middle;" icon="skill-icons:css" width="2em" height="2em" />
              </template>
              <template #content>
                <div style="margin-top: 10px;">
                  Designed and developed an online real-time chat room application
                  <br>
                  Allows users to create their own chat rooms and communicate using the Socket.io library’s room functionality
                  <br>
                  Built using Node.js, HTML and CSS
                </div>
              </template>
              <template #footer>
                <Button style="margin-top: 10px" severity="contrast" rounded size="large" @click="redirectToLink('https://github.com/shogun187/chat-app/tree/main')"><i class="pi pi-github"></i><strong>Project</strong></Button>
              </template>
            </Card>
          </div>
        </vue-slide>

        <vue-slide>
          <div>
            <Card class="card">
              <template #header>
                <div style="margin-top: 10px">
                  <Image src="./uninurse.png" width="650" height="400"></Image>
                </div>
              </template>
              <template #title>
                <h2>UniNurse</h2>
              </template>
              <template #subtitle>
                Made With:
                <Icon style="vertical-align: middle; margin-left:2px" icon="devicon:java" width="2em" height="2em" />
              </template>
              <template #content>
                <div style="margin-top: 10px;">
                  Desktop app designed for private nurses to manage their patient contacts
                  <br>
                  Allows tracking of patients' contact details, appointments, medications and medical conditions
                  <br>
                  Built using Java
                </div>
              </template>
              <template #footer>
                <Button style="margin-top: 10px" severity="contrast" rounded size="large" @click="redirectToLink('https://github.com/shogun187/tp')"><i class="pi pi-github"></i><strong>Project</strong></Button>
              </template>
            </Card>
          </div>
        </vue-slide>

        <template #addons>
          <vue-navigation/>
          <vue-pagination />
        </template>

      </vue-carousel>
    </div>
  </div>

</template>

<script>
import {Icon} from "@iconify/vue";
import 'vue3-carousel/carousel.css'
import { Carousel as vueCarousel, Slide as vueSlide, Pagination as vuePagination, Navigation as vueNavigation } from 'vue3-carousel'

export default {
  data() {
    return {
      carouselConfig: {
        height: 800,
        itemsToShow: 1,
        gap: 10,
        wrapAround: true,
        }
    }
  },
  components: { Icon , vueCarousel, vueSlide, vuePagination, vueNavigation },
  methods: {
    redirectToLink(link) {
      window.open(link, '_blank');
    }
  }
}
</script>

<style scoped>
.card {
  color: black !important;
  overflow: hidden;
  --p-card-background: #d9d9d9 !important;
}
</style>
