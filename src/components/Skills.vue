<template>
	<div id="skills-section" v-motion-slide-visible-left>
		<h2>My Skills</h2>

		<div class="skills-container">
			<div class="skill">
				<Icon height="3em" icon="logos:javascript" width="3em" />
				<h4>Javascript</h4>
			</div>

			<div class="skill">
				<Icon height="3em" icon="logos:typescript-icon" width="3em" />
				<h4>TypeScript</h4>
			</div>

			<div class="skill">
				<Icon height="3em" icon="logos:vue" width="3em" />
				<h4>Vue.js</h4>
			</div>

			<div class="skill">
				<Icon height="3em" icon="logos:react" width="3em" />
				<h4>React</h4>
			</div>

			<div class="skill">
				<Icon height="3em" icon="logos:nodejs-icon" width="3em" />
				<h4>Node.js</h4>
			</div>

			<div class="skill">
				<Icon height="3em" icon="logos:python" width="3em" />
				<h4>Python</h4>
			</div>

			<div class="skill">
				<Icon height="3em" icon="logos:java" width="3em" />
				<h4>Java</h4>
			</div>

			<div class="skill">
				<Icon height="3em" icon="logos:spring-icon" width="3em" />
				<h4>Spring Boot</h4>
			</div>

			<div class="skill">
				<Icon height="3em" icon="skill-icons:html" width="3em" />
				<h4>HTML</h4>
			</div>

			<div class="skill">
				<Icon height="3em" icon="skill-icons:css" width="3em" />
				<h4>CSS</h4>
			</div>

			<div class="skill">
				<Icon height="3em" icon="logos:postgresql" width="3em" />
				<h4>PostgreSQL</h4>
			</div>

			<div class="skill">
				<Icon height="3em" icon="logos:mysql" width="3em" />
				<h4>MySQL</h4>
			</div>

			<div class="skill">
				<Icon height="3em" icon="devicon:mongodb" width="3em" />
				<h4>MongoDB</h4>
			</div>

			<div class="skill">
				<Icon height="3em" icon="skill-icons:docker" width="3em" />
				<h4>Docker</h4>
			</div>

			<div class="skill">
				<Icon height="3em" icon="logos:aws" width="3em" />
				<h4>AWS</h4>
			</div>
		</div>
	</div>
</template>

<script>
import { Icon } from "@iconify/vue"

export default {
	components: { Icon }
}
</script>

<style scoped>
#skills-section {
	display: flex;
	flex-direction: column;
	align-items: center;
	scroll-margin-top: 100px;
}

.skills-container {
	display: grid;
	grid-template-columns: repeat(5, 1fr); /* 5 columns */
	gap: 1em; /* Gap between grid items */
	width: 40%;
}

@media screen and (max-width: 1024px) {
	.skills-container {
		width: 100%;
		grid-template-columns: repeat(3, 1fr);
	}
}


.skill {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	transition: transform 0.3s ease;
}

.skill:hover {
	transform: scale(1.2);
}
</style>
