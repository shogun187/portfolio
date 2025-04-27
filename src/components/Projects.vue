<template>
	<div id="projects-section" v-motion-slide-visible-once-top style="width: 80%; margin: 0 auto">
		<h2>My Projects</h2>
		<div class="projects-container">

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
						<Icon height="2em" icon="logos:python" style="vertical-align: middle;" width="2em" /> &nbsp;
						<Icon height="2em" icon="logos:selenium" style="vertical-align: middle;" width="2em" /> &nbsp;
						<Image height="32" src="./beautiful-soup.svg" style="vertical-align: top"  />
					</div>
				</template>
				<template #content>
					Web scraper app to obtain cargo, maintenance, engine and location data regarding 20,000+ container ships. <br> Created for shipping data analysis company <a href="https://www.linerlytica.com/about" target="_blank">Linerlytica</a>. <br>Made with Python, Selenium and Beautiful Soup.
				</template>
				<template #footer>
					<Button class="project-button" rounded size="large" @click="redirectToLink('https://github.com/shogun187/vessel-data-scraper')"><i class="pi pi-github" /><strong>Project</strong></Button>
				</template>
			</Card>

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
					<Icon height="2em" icon="logos:python" style="vertical-align: middle;" /> &nbsp;
					<Icon height="2em" icon="logos:telegram" style="vertical-align: middle;" width="2em" /> &nbsp;
					<Icon height="3em" icon="devicon:mongodb-wordmark" style="vertical-align: middle;" width="3em" /> &nbsp;
					<Icon height="2em" icon="skill-icons:docker" style="vertical-align: middle;" width="2em" /> &nbsp;
					<Icon height="2em" icon="logos:aws" style="vertical-align: middle;" width="2em" /> &nbsp;
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
					<Button class="project-button" rounded size="large" @click="redirectToLink('https://github.com/shogun187/BSB-BTO-Tracker')"><i class="pi pi-github"></i><strong>Project</strong></Button>
				</template>
			</Card>

			<Card class="card">
				<template #header>
					<div style="margin-top: 10px">
						<Image src="./chat-app.png" width="650"></Image>
					</div>
				</template>
				<template #title>
					<h2>Chat App</h2>
				</template>
				<template #subtitle>
					Made With:
					<Icon height="2em" icon="logos:nodejs-icon" style="vertical-align: middle; margin-right: 8px" width="2em" />
					<Icon height="2em" icon="skill-icons:html" style="vertical-align: middle; margin-right: 8px" width="2em" />
					<Icon height="2em" icon="skill-icons:css" style="vertical-align: middle;" width="2em" />
				</template>
				<template #content>
					<div style="margin-top: 10px;">
						Designed and developed an online real-time chat room application
						<br>
						Allows users to create their own chat rooms and communicate using the Socket.io library's room functionality
						<br>
						Built using Node.js, HTML and CSS
					</div>
				</template>
				<template #footer>
					<Button class="project-button" rounded size="large" @click="redirectToLink('https://github.com/shogun187/chat-app/tree/main')"><i class="pi pi-github"></i><strong>Project</strong></Button>
				</template>
			</Card>

			<Card class="card">
				<template #header>
					<div style="margin-top: 10px">
						<Image height="400" src="./uninurse.png" width="650"></Image>
					</div>
				</template>
				<template #title>
					<h2>UniNurse</h2>
				</template>
				<template #subtitle>
					Made With:
					<Icon height="2em" icon="devicon:java" style="vertical-align: middle; margin-left:2px" width="2em" />
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
					<Button class="project-button" rounded size="large" @click="redirectToLink('https://github.com/shogun187/tp')"><i class="pi pi-github"></i><strong>Project</strong></Button>
				</template>
			</Card>

		</div>
	</div>
</template>

<script>
import { Icon } from "@iconify/vue"

export default {
	components: { Icon },
	methods: {
		redirectToLink(link) {
			window.open(link, '_blank')
		}
	}
}
</script>

<style scoped>
.projects-container {
	display: flex;
	flex-direction: column;
	gap: 40px;
	margin: 30px 0;
}

.card {
	color: black;
	--p-card-background: #d9d9d9;
	width: 100%;
	margin: 0 auto;
	transition: transform 0.3s ease;
}

@media screen and (min-width: 768px) {
	.card {
		width: 70%;
	}
}

.card:hover {
	transform: translateY(-5px);
	box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.project-button {
	background-color: #f5f5f6;
	--p-button-primary-hover-background: #ececec;
	color: black !important;
	border: none !important;
	margin-top: 10px;
}

#projects-section {
	scroll-margin-top: 100px;
	overflow-x: hidden;
}

:deep(.p-card-header img) {
	max-width: 100%;
	height: auto;
	display: block;
	margin: 0 auto;
}
</style>