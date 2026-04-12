<script lang="ts">
	import Hero from '$lib/components/sections/Hero.svelte';
	import About from '$lib/components/sections/About.svelte';
	import Skills from '$lib/components/sections/Skills.svelte';
	import Projects from '$lib/components/sections/Projects.svelte';
	import Experience from '$lib/components/sections/Experience.svelte';
	import Contact from '$lib/components/sections/Contact.svelte';
</script>

<svelte:head>
	<title>Mahdi Saifullah Srizan — Mobile App Developer</title>
	<meta
		name="description"
		content="Android developer with 4 years of experience building modern mobile applications."
	/>
</svelte:head>

<Hero />
<About />
<Skills />
<Projects />
<Experience />
<Contact />
