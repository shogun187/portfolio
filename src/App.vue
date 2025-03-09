<template>
	<div id="home-section">
		<particles />

		<div style="text-align: center">
			<navbar />
			<br>
			<introduction />
			<vertical-divider />
			<projects />
			<vertical-divider />
			<skills />
			<vertical-divider />
			<experience />
			<vertical-divider />
			<education />
		</div>
		<scroll-to-top />
	</div>
</template>

<script>
import Particles from "@/components/Particles.vue"
import Introduction from "@/components/Introduction.vue"
import Projects from "@/components/Projects.vue"
import Skills from "@/components/Skills.vue"
import Experience from "@/components/Experience.vue"
import Education from "@/components/Education.vue"
import VerticalDivider from '@/components/VerticalDivider.vue'
import ScrollToTop from "@/components/ScrollToTop.vue"
import Navbar from '@/components/NavBar.vue'

export default {
	components: {
		ScrollToTop,
		Education,
		Particles,
		Introduction,
		Projects,
		Skills,
		Experience,
		VerticalDivider,
		Navbar
	},
	methods: {}
}

</script>

<style scoped>
</style>
