<template>
  <vue-particles
      id="tsparticles"
      @particles-loaded="particlesLoaded"
      :options="{
                    background: {
                        color: {
                            value: '#B2BEB5'
                        }
                    },
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onHover: {
                                enable: true,
                                mode: 'repulse'
                            },
                        },
                        modes: {
                            bubble: {
                                distance: 400,
                                duration: 2,
                                opacity: 0.8,
                                size: 40
                            },
                            push: {
                                quantity: 4
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4
                            }
                        }
                    },
                    particles: {
                        color: {
                            value: '#ffffff'
                        },
                        links: {
                            color: '#ffffff',
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1
                        },
                        move: {
                            direction: 'none',
                            enable: true,
                            outModes: 'bounce',
                            random: false,
                            speed: 6,
                            straight: false
                        },
                        number: {
                            density: {
                                enable: true,
                            },
                            value: 20
                        },
                        opacity: {
                            value: 0.5
                        },
                        shape: {
                            type: 'circle'
                        },
                        size: {
                            value: { min: 1, max: 5 }
                        }
                    },
                }"
  />

</template>

<script>


export default {
  components: {},
  methods: {
    async particlesLoaded(container) {
      console.log("Particles container loaded", container);
    }
  },
  mounted() {
  }
}

</script>

<style scoped>
#tsparticles {
  position: absolute;
  z-index: 0; /* Background layer */
}
</style>