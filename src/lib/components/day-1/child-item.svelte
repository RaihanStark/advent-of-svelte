<script lang="ts">
	let { name = 'Unnamed Child', tally = 0, ...restProps } = $props()
	
	// Use default name if the provided name is empty or falsy
	const displayName = name || 'Unnamed Child';
</script>

<div {...restProps}>
	<span data-testid="name">{displayName}</span>
	<span data-testid="tally">{Math.round(tally)}</span>
	{#if tally < 0}
		<span data-testid="naughty-badge">Naughty</span>
	{:else}
		<span data-testid="nice-badge">Nice</span>
	{/if}
</div>