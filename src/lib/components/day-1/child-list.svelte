<script lang="ts">
	import ChildItem from "./child-item.svelte";

    let { childs } = $props()
</script>

<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" data-testid="child-list">
{#each childs as child, index}
    <ChildItem data-testid="child-item-{index}" name={child.name} tally={child.tally} />
{:else}
    <div data-testid="empty-child">No children</div>
{/each}
</div>