<script>
export default {}
</script>

<template>
	<div id="education-section" v-motion-slide-visible-left>
		<h2>My Education</h2>
		<Card class="card">
			<template #header>
				<div style="margin-top: 10px">
					<Image height="100" src="./nus.png" />
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

</template>

<style scoped>
.card {
	width: 90%;
	margin: 0 auto;
	color: black;
	overflow: hidden;
	background: #d9d9d9;
}

@media screen and (min-width: 1200px) {
	.card {
		width: 25%;
	}
}
</style>
