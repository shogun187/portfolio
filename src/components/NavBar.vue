<script>
export default {
	data() {
		return {
			activeSection: '', // holds the id of the section currently in view
		}
	},
	methods: {
		scrollToSection(id) {
			this.$nextTick(() => {
				document.getElementById(id).scrollIntoView();
			});
		},
		handleIntersections(entries) {
			// Loop through each observed entry
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					// When a section is intersecting (visible), update activeSection
					this.activeSection = entry.target.id;
				}
			});
		}
	},
	computed: {
		items() {
			const returnVal = [
				{
					label: 'Home',
					id: 'home-section',
					command: () => {
						this.scrollToSection('home-section')
						this.$nextTick(() => document.activeElement.blur());
					},
					class: this.activeSection === 'home-section' ? 'active-menu-item' : ''
				},
				{
					label: 'Projects',
					id: 'projects-section',
					command: () => {
						this.scrollToSection('projects-section')
						this.$nextTick(() => document.activeElement.blur())
					},
					class: this.activeSection === 'projects-section' ? 'active-menu-item' : ''
				},
				{
					label: 'Skills',
					id: 'skills-section',
					command: () => {
						this.scrollToSection('skills-section')
						this.$nextTick(() => document.activeElement.blur())
					},
					class: this.activeSection === 'skills-section' ? 'active-menu-item' : ''
				},
				{
					label: 'Experience',
					id: 'experience-section',
					command: () => {
						this.scrollToSection('experience-section')
						this.$nextTick(() => document.activeElement.blur())
					},
					class: this.activeSection === 'experience-section' ? 'active-menu-item' : ''
				},
				{
					label: 'Education',
					id: 'education-section',
					command: () => {
						this.scrollToSection('education-section')
						this.$nextTick(() => document.activeElement.blur())
					},
					class: this.activeSection === 'education-section' ? 'active-menu-item' : ''
				},
			]
			return returnVal
		}
	},
	mounted() {
		// Set up IntersectionObserver options
		const options = {
			root: null,       // use the viewport as the container
			threshold: 0.4,    // adjust this value to determine when a section is "active"
		};
		// Create the observer and start observing each section
		const observer = new IntersectionObserver(this.handleIntersections, options);
		this.items.forEach(item => {
			const element = document.getElementById(item.id);
			if (element) {
				observer.observe(element);
			}
		});
	}
}
</script>

<template>
	<Menubar :model="items" class="menubar" />
</template>

<style scoped>
.menubar {
	--p-menubar-item-color: #5a5a5a;
	--p-menubar-item-focus-background: transparent;
	--p-menubar-item-border-radius: 50px;
	--p-menubar-item-focus-color: white;
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

:deep(.p-menuitem-link:not(.active-menu-item):focus),
:deep(.p-menuitem-link:not(.active-menu-item):hover) {
	color: #5a5a5a !important;
}

:deep(.active-menu-item) {
	background: var(--p-slate-500);
	--p-menubar-item-color: white;
	border-radius: 50px;
}

</style>
