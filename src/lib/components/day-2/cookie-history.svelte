<script lang="ts">
	import { fade } from "svelte/transition";

    let { history = [] } = $props();

    const getHistoryMessage = (action: string) => {
        switch (action) {
            case 'increment':
                return 'Santa ate a cookie';
            case 'decrement':
                return 'Santa throw a cookie';
            case 'reset':
                return 'Santa dumps the cookies';
        }
    }

</script>
<div data-testid="cookie-history" class="w-full mt-5 gap-2 flex flex-col">
    {#if history.length === 0}
        <div class="text-center">No History</div>
    {:else}
        {#each history as item (item.id)}
            <div class="flex justify-between border border-border rounded-md p-2" in:fade>
                <div>
                {getHistoryMessage(item.action)}
                </div>
                <div>
                    {item.action === 'increment' ? '+1' : item.action === 'decrement' ? '-1' : '0'}
                </div>
            </div>
        {/each}
    {/if}
</div>