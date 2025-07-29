<script lang="ts">
	export let name: string;
	export let tally: number;
</script>

<div>
	<span data-testid="name">{name}</span>
	<span data-testid="tally">{Math.abs(tally)}</span>
	{#if tally < 0}
		<span data-testid="naughty-badge">Naughty</span>
	{/if}
</div>