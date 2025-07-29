<script lang="ts">
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
<div data-testid="cookie-history" class="w-full mt-5">
    {#if history.length === 0}
        <div class="text-center">No History</div>
    {:else}
        {#each history as item}
            <div>
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