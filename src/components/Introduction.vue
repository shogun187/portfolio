<template>
  <div class="introduction" v-motion-fade>
    <Avatar image="./shaugn.jpg" shape="circle" size="large" style="height: 150px; width: 150px" class="avatar"/>
    <br>
    <span style="font-size: 50px">👋</span>
    <br>
    <Typewriter :speed="90" :delay="0" :loop="false" :textStyles="{fontSize: '2em', 'font-weight': 900}">Hello, I'm Shaugn.</Typewriter>
    <br>
    <h1><span style="font-weight:400">I'm an aspiring software engineer currently studying at the</span> <span style="font-weight: 900">National University of Singapore.</span></h1>
    <br><br>
    <div class="button-container">
      <Button class="github-button" severity="contrast" rounded size="large" @click="redirectToLink('https://github.com/shogun187')"><strong>GitHub</strong> <i class="pi pi-github"></i></Button>
      <Button class="linkedin-button" rounded size="large" @click="redirectToLink('https://www.linkedin.com/in/shaugn-tan-b50238147/')"><strong>LinkedIn</strong> <i class="pi pi-linkedin"></i></Button>
    </div>

    <br><br>

  </div>
</template>

<script>
import Typewriter from '@btjspr/vue-typewriter';

export default {
  components: {
    Typewriter
  },
  methods: {
    redirectToLink(link) {
      window.open(link, '_blank');
    }
  }
}
</script>

<style scoped>
.introduction {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
}

.github-button {
  background-color: #101424 !important;
  color: #ffffff;
  border: none !important;
}

.github-button:hover {
  color: #a2a2a2 !important;
}

.linkedin-button {
  background-color: #007ebb;
  border: none !important;
  color: #ffffff;
}

.linkedin-button:hover {
  background-color: #005f99 !important;
  color: #18181b !important;
}

.button-container {
  display: flex;
  justify-content: center;
  gap: 60px;
}

</style>
