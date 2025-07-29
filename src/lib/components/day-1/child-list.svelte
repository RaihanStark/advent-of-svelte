<script lang="ts">
	import ChildItem from "./child-item.svelte";

    let { childs } = $props()
</script>

{#each childs as child, index}
    <ChildItem data-testid="child-item-{index}" name={child.name} tally={child.tally} />
{:else}
    <div data-testid="empty-child">No children</div>
{/each}