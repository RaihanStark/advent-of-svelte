<script lang="ts">
	import '../app.css';
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import AppSidebar from '$lib/components/app-sidebar.svelte';
	import AppTopbar from '$lib/components/app-topbar.svelte';

	let { children } = $props();
</script>

<Sidebar.Provider>
	<AppSidebar />
	<div class="flex flex-col w-full">
		<AppTopbar title="Day 1: Naughty or Nice" />
		<main class="p-4">{@render children?.()}</main>
	</div>
</Sidebar.Provider>
