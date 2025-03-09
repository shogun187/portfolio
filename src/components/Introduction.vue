<template>
	<div v-motion-fade class="introduction" style="row-gap: 2em">
		<Avatar class="avatar" image="./shaugn.jpg" shape="circle" size="large" style="height: 150px; width: 150px" />
		<span style="font-size: 50px">👋</span>
		<Typewriter :delay="0" :loop="false" :speed="90" :textStyles="{ fontSize: '2em', 'font-weight': 900 }">Hello, I'm Shaugn.</Typewriter>
		<h1><span style="font-weight:400">I'm an aspiring software engineer currently studying at the</span> <span style="font-weight: 900">National University of Singapore.</span></h1>
		<div class="button-container">
			<Button class="github-button" rounded size="large" @click="redirectToLink('https://github.com/shogun187')"><strong>GitHub</strong> <i class="pi pi-github"></i></Button>
			<Button class="linkedin-button" rounded size="large" @click="redirectToLink('https://www.linkedin.com/in/shaugn-tan-b50238147/')"><strong>LinkedIn</strong> <i class="pi pi-linkedin"></i></Button>
		</div>
	</div>
</template>

<script>
import Typewriter from '@btjspr/vue-typewriter'

export default {
	components: {
		Typewriter
	},
	methods: {
		redirectToLink(link) {
			window.open(link, '_blank')
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
	--p-button-primary-background: black;
	border: none !important;
	color: white;
	--p-button-primary-hover-background: #101424;
	--p-button-primary-hover-color: #a2a2a2;
}

.linkedin-button {
	background-color: #007ebb;
	border: none !important;
	color: white;
	--p-button-primary-hover-background: #005f99;
	--p-button-primary-hover-color: #18181b;
}

.button-container {
	display: flex;
	justify-content: center;
	gap: 60px;
}
</style>
