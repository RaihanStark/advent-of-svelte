<script lang="ts">
	import SidebarTrigger from "./ui/sidebar/sidebar-trigger.svelte";

	// props
	const { title } = $props();
</script>

<div class="bg-sidebar w-full flex items-center p-3 border-b border-border">
	<SidebarTrigger />
	<h1 class="text-xl font-medium ml-3">{title}</h1>
</div>
