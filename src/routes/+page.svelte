<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import Hero from '$lib/components/sections/Hero.svelte';
	import About from '$lib/components/sections/About.svelte';
	import Skills from '$lib/components/sections/Skills.svelte';
	import Projects from '$lib/components/sections/Projects.svelte';
	import Experience from '$lib/components/sections/Experience.svelte';
	import Contact from '$lib/components/sections/Contact.svelte';
	import { name } from '$lib/data/profile';
</script>

<Seo
	title="{name} — Mobile App Developer"
	description="Android developer with 4+ years of experience building modern mobile applications with Kotlin, Java, and Flutter."
/>

<Hero />
<About />
<Projects />
<Skills />
<Experience />
<Contact />
