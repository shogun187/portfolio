<template>
  <div id="home-section">
    <particles />
    <div style="position: relative;">

      <Menubar :model="items" style="font-weight: 700; font-size: 20px;"></Menubar>
      <br>

      <div style="text-align: center;">
        <div class="introduction" v-motion-fade>
          <Avatar image="./shaugn.jpg" shape="circle" size="large" style="height: 150px; width: 150px"></Avatar>
          <br>
          <span style="font-size: 40px">👋</span>
          <h1><span style="font-weight: 900">Hello, I'm Shaugn. </span></h1>
          <br>
          <h1><span style="font-weight:400">I'm an aspiring software engineer currently studying at the</span> <span style="font-weight: 900">National University of Singapore.</span></h1>
          <br><br>
          <div style="display:flex; justify-content: center; gap: 60px">
            <Button severity="secondary" rounded size="large" @click="redirectToLink('https://github.com/shogun187')"><strong>GitHub</strong> <i class="pi pi-github"></i></Button>
            <Button severity="contrast" rounded size="large" @click="redirectToLink('https://www.linkedin.com/in/shaugn-tan-b50238147/')"><strong>LinkedIn</strong> <i class="pi pi-linkedin"></i></Button>
          </div>

          <br><br>

        </div>

        <Divider layout="vertical" style="height: 100px;" />

        <div class="projects" id="projects-section" style="margin: 0 auto; width: 50%" v-motion-slide-visible-once-top >
          <h2>My Projects</h2>

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

          <br>

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
                Telegram chatbot to monitor HDB flat uptake for Bedok South Blossoms BTO launched in May 2023.
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

          <br>

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

          <br>

          <Card class="card">
            <template #header>
              <div style="margin-top: 10px">
                <Image src="./uninurse.png" width="700" height="500"></Image>
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
        <br>

        <Divider layout="vertical" style="height: 100px;" />

        <div class="skills" id="skills-section" v-motion-slide-visible-left>
          <h2>My Skills</h2>

          <div style="display: flex; justify-content: center; gap: 2em;">

            <div class="skill">
              <Icon icon="logos:javascript" width="3em" height="3em" />
              <h4>Javascript</h4>
            </div>

            <div class="skill">
              <Icon icon="logos:typescript-icon" width="3em" height="3em" />
              <h4>TypeScript</h4>
            </div>

            <div class="skill">
              <Icon icon="logos:vue" width="3em" height="3em" />
              <h4>Vue.js</h4>
            </div>

            <div class="skill">
              <Icon icon="logos:nodejs-icon" width="3em" height="3em" />
              <h4>Node.js</h4>
            </div>

          </div>

          <div style="display: flex; justify-content: center; gap: 2em;">

            <div class="skill">
              <Icon icon="logos:python" width="3em" height="3em" />
              <h4>Python</h4>
            </div>

            <div class="skill">
              <Icon icon="logos:java" width="3em" height="3em" />
              <h4>Java</h4>
            </div>

            <div class="skill">
              <Icon icon="logos:spring-icon" width="3em" height="3em" />
              <h4>Spring Boot</h4>
            </div>

            <div class="skill">
              <Icon icon="skill-icons:html" width="3em" height="3em" />
              <h4>HTML</h4>
            </div>

            <div class="skill">
              <Icon icon="skill-icons:css" width="3em" height="3em" />
              <h4>CSS</h4>
            </div>

          </div>

          <div style="display: flex; justify-content: center; gap: 2em;">

            <div class="skill">
              <Icon icon="logos:postgresql" width="3em" height="3em" />
              <h4>PostgreSQL</h4>
            </div>

            <div class="skill">
              <Icon icon="logos:mysql" width="3em" height="3em" />
              <h4>MySQL</h4>
            </div>

            <div class="skill">
              <Icon icon="devicon:mongodb" width="3em" height="3em" />
              <h4>MongoDB</h4>
            </div>

            <div class="skill">
              <Icon icon="skill-icons:docker" width="3em" height="3em" />
              <h4>Docker</h4>
            </div>

            <div class="skill">
              <Icon icon="logos:aws" width="3em" height="3em" />
              <h4>AWS</h4>
            </div>
          </div>

        </div>

        <br>

        <Divider layout="vertical" style="height: 100px;" />

        <div class="experience" id="experience-section" style="width: 50%; margin: 0 auto" v-motion-slide-visible-right>
          <h2>My Experience</h2>
          <Timeline :value="timeline" align="alternate">

            <template #marker>
              <Avatar icon="pi pi-briefcase" shape="circle" style="background-color: #d9d9d9 !important" />
            </template>

            <template #opposite="slotProps">
              <div style="padding-top: 5px">
                <strong>{{ slotProps.item.duration }}</strong>
              </div>

            </template>

            <template #content="slotProps">
              <div style="margin-bottom: 20px">
                <Card class="card" style="border-radius: 3px; border: 2px black solid;">
                  <template #header>
                    <div style="display: flex; justify-content: center; margin-top: 10px">
                      <Image :src="slotProps.item.image"/>
                    </div>

                  </template>

                  <template #title>
                    {{ slotProps.item.title }}
                  </template>

                  <template #subtitle>
                    {{ slotProps.item.company }}
                  </template>

                  <template #content>
                    <ul>
                      <li v-for="content in slotProps.item.content" style="margin-bottom: 1em">
                        {{content}}
                      </li>
                    </ul>

                  </template>

                  <template #footer>
                    {{ slotProps.item.footer }}
                  </template>
                </Card>
              </div>

            </template>
          </Timeline>
        </div>

        <br>

        <Divider layout="vertical" style="height: 100px;" />

        <div class="education" id="education-section" v-motion-slide-visible-left >
          <h2>My Education</h2>
          <Card class="card" style="width: 20%; margin: 0 auto;">
            <template #header>
              <div style="margin-top: 10px">
                <Image src="./nus.png" height="100" />
              </div>


            </template>
            <template #title>
              Bachelor of Computing in Computer Science
            </template>



            <template #content>
              <br>
              National University of Singapore
              <br><br>
              Graduating in May 2025
              <br><br>
              Focus Area: Database Systems
            </template>

          </Card>

        </div>

      </div>
    </div>
    <ScrollTop />
  </div>
</template>

<script>
import Particles from "@/components/Particles.vue";
import Menubar from "primevue/menubar";
import { Icon } from "@iconify/vue";

export default {
  components: {
    Icon,
    Particles,
    Menubar
  },
  data() {
    return {
      items: [
        { label: 'Home', command: () => document.getElementById('home-section').scrollIntoView({ behavior: 'smooth' }) },
        { label: 'Projects', command: () => document.getElementById('projects-section').scrollIntoView({ behavior: 'smooth' }) },
        { label: 'Skills', command: () => document.getElementById('skills-section').scrollIntoView({ behavior: 'smooth' }) },
        { label: 'Experience', command: () => document.getElementById('experience-section').scrollIntoView({ behavior: 'smooth' }) },
        { label: 'Education', command: () => document.getElementById('education-section').scrollIntoView({ behavior: 'smooth' }) },
      ],
      timeline: [
        {
          title: 'Full-stack Developer Intern', duration: 'May 2024 - Dec 2024', company: 'Grey & Sanders',
          image: "./grey-and-sanders.jpeg",
          content: [
              "Contributed to the development of internal web app to manage company's sales, inventory, incoming shipments and deliveries.",
              'Created custom dashboards for in-depth analysis of top-performing products, inventory management, and sales performance across different time periods.',
              "Worked with development team in implementing route planning algorithm using Google Maps API to optimize delivery routes and predictable delivery timings."


          ],
          footer: 'Tech stacks used: Vue.js, Node.js, PostgreSQL'
        },
        {
          title: 'Back-end Developer Intern', duration: 'May 2023 - Aug 2023', company: 'MCC Singapore',
          image: "./mcc.jpeg",
          content: [
            'Worked with the development team to extend functionalities of back-end for an e-commerce website specializing in furniture and home appliances.',
            'Automated testing and documentation processes using JUnit and Swagger, leading to increase in code coverage and streamlined API documentation'
          ],
          footer: 'Tech stacks used: Java, Spring Boot, MySQL'
        },
      ]
    }
  },
  methods: {
    redirectToLink(link) {
      window.open(link, '_blank');
    }
  }
}

</script>

<style scoped>

.skill {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.p-menubar {
  justify-content: center;
  border: none !important;
  background: transparent !important;
  color: black !important;
}

.card {
  color: black !important;
  overflow: hidden
}

.p-scrolltop {
  background: #8c8c8c !important;
  border: none;
}

.p-timeline-event-marker {
  background-color: red !important;
  color: pink !important;
}
</style>
