<script>
export default {
	data() {
		return {
			items: [
				{
					label: 'Home',
					command: () => this.$nextTick(() => document.getElementById('home-section').scrollIntoView())
				},
				{
					label: 'Projects',
					command: () => this.$nextTick(() => document.getElementById('projects-section').scrollIntoView())
				},
				{
					label: 'Skills',
					command: () => this.$nextTick(() => document.getElementById('skills-section').scrollIntoView())
				},
				{
					label: 'Experience',
					command: () => this.$nextTick(() => document.getElementById('experience-section').scrollIntoView())
				},
				{
					label: 'Education',
					command: () => this.$nextTick(() => document.getElementById('education-section').scrollIntoView())
				},
			]
		}
	}
}
</script>

<template>
	<Menubar :model="items" />
</template>

<style scoped>
.p-menubar {
	--p-menubar-item-color: #5a5a5a;
	--p-menubar-item-focus-background: var(--p-slate-500);
	background: #9EAAA1;
	border-color: transparent;
	border-radius: 50px;
	justify-content: center;
	font-weight: 500;
	font-size: 1rem;
	width: 30%;
	margin: 0 auto;
	position: sticky;
	top: 5px;
	z-index: 1000;
}

</style>
