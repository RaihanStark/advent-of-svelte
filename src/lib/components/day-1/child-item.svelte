<script lang="ts">
	import Badge from "../ui/badge/badge.svelte";
	import BadgeCheckIcon from "@lucide/svelte/icons/badge-check";

	let { name = 'Unnamed Child', tally = 0, ...restProps } = $props()
	
	// Use default name if the provided name is empty or falsy
	const displayName = name || 'Unnamed Child';
</script>

<div class="py-3 px-4 border border-gray-300 rounded-md" {...restProps}>
	<div class="flex justify-between items-center">
		<span data-testid="name">{displayName}</span>
		<span data-testid="tally">{Math.round(tally)}</span>
	</div>
	{#if tally < 0}
		<Badge variant="destructive" class="mt-2" data-testid="naughty-badge">Naughty</Badge>
	{:else}
		<Badge variant='default' class="mt-2 bg-blue-500 text-white" data-testid="nice-badge">
			<BadgeCheckIcon />
			Nice</Badge>
	{/if}
</div>