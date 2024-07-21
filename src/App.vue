<template>
  <div>

    <particles />
    <div style="position: relative">
      <Menubar :model="items"></Menubar>
      <div style="text-align: center">
        <h1><span style="font-weight: 900">Hello, I'm Shaugn. </span></h1>
        <br>
        <h1><span style="font-weight:400">I'm an aspiring software engineer currently studying at the</span> <span style="font-weight: 900">National University of Singapore.</span></h1>
      </div>

    </div>



  </div>
</template>


<script>
import Particles from "@/components/Particles.vue";
import Menubar from "primevue/menubar";

export default {
  components: {
    Particles,
    Menubar
  },
  data() {
    return {
      items: [
        { label: 'Home' },
        { label: 'Education' },
        { label: 'Experience' },
        { label: 'Projects' }
      ]
    }
  },
  methods: {

  }
}

</script>
<style scoped>
.p-menubar {
  display: flex;
  justify-content: flex-end;
  border: none !important;
  background: transparent !important;

}






</style>
