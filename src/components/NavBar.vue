<script>
export default {
  data() {
    return {
      items: [
        {
          label: 'Home',
          command: () => document.getElementById('home-section').scrollIntoView({behavior: 'smooth'})},
        {
          label: 'Projects',
          command: () => document.getElementById('projects-section').scrollIntoView({behavior: 'smooth'})
        },
        {
          label: 'Skills',
          command: () => document.getElementById('skills-section').scrollIntoView({behavior: 'smooth'})
        },
        {
          label: 'Experience',
          command: () => document.getElementById('experience-section').scrollIntoView({behavior: 'smooth'})
        },
        {
          label: 'Education',
          command: () => document.getElementById('education-section').scrollIntoView({behavior: 'smooth'})
        },
      ]
    }
  }
}
</script>

<template>
  <Menubar :model="items" class="menubar" />
</template>

<style scoped>
.menubar {
  --p-menubar-item-color: #5a5a5a !important;
  --p-menubar-item-focus-background: var(--p-slate-500) !important;
    justify-content: center;
    border: none !important;
    background: transparent !important;
    color: black !important;
    font-weight: 700;
    font-size: 20px;
}
</style>
