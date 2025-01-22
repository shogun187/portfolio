<template>
  <div id="experience-section" v-motion-slide-visible-right>
    <h2>My Experience</h2>
    <Timeline :value="timeline" align="alternate" class="timeline">

      <template #marker>
        <Avatar icon="pi pi-briefcase" shape="circle" style="background-color: #d9d9d9 !important"/>
      </template>

      <template #opposite="slotProps">
        <div style="padding-top: 5px">
          <strong>{{ slotProps.item.duration }}</strong>
        </div>

      </template>

      <template #content="slotProps">
        <div style="margin-bottom: 20px">
          <Card class="card">
            <template #header>
              <div style="display: flex; justify-content: center; margin-top: 10px">
                <Image :src="slotProps.item.image" width="110" height="90"/>
              </div>

            </template>

            <template #title>
              {{ slotProps.item.title }}
            </template>

            <template #subtitle>
              <span style="color: #87878d">{{ slotProps.item.company }}</span>
            </template>

            <template #content>
              <ul>
                <li v-for="content in slotProps.item.content" style="margin-bottom: 1em">
                  {{ content }}
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

</template>

<script>
export default {
  data () {
    return {
      timeline: [
        {
          title: 'Software Engineer Intern', duration: 'Jan 2025 - Present', company: 'KPMG Singapore',
          image: "./kpmg.svg",
          content: [
            "Design and implement enterprise applications to meet business needs."


          ],
          footer: 'Tech stacks used: Node.js, .NET, React'
        },
        {
          title: 'Software Engineer Intern', duration: 'May 2024 - Dec 2024', company: 'Grey & Sanders',
          image: "./grey-and-sanders.jpeg",
          content: [
            "Contributed to the development of internal web app to manage company's sales, inventory, incoming shipments and deliveries."


          ],
          footer: 'Tech stacks used: Vue.js, Node.js, PostgreSQL'
        },
        {
          title: 'Software Engineer Intern', duration: 'May 2023 - Aug 2023', company: 'MCC Singapore',
          image: "./mcc.png",
          content: [
            'Worked with the development team to extend functionalities of back-end for an e-commerce website specializing in furniture and home appliances.'
          ],
          footer: 'Tech stacks used: Java, Spring Boot, MySQL'
        },
      ]
    }
  }
}
</script>

<style scoped>
#experience-section {
  width: 40%;
  margin: 0 auto;
}

.card {
  color: black;
  overflow: hidden;
  --p-card-background: #d9d9d9;
  border: 1px black solid;
  text-align: left;
}

.timeline {
  --p-timeline-event-connector-color: black;
}
</style>
