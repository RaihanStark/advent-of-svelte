<script lang="ts">
	import CookieAction from "$lib/components/day-2/cookie-action.svelte";
    import CookieHistory from "$lib/components/day-2/cookie-history.svelte";
    import SantaMood from "$lib/components/day-2/santa-mood.svelte";

    interface History {
        action: 'increment' | 'decrement' | 'reset';
    }

    let history: History[] = $state([]);
    let cookiesCount = $state(0);

    const handleIncrement = () => {
        cookiesCount++;
        history.unshift({ action: 'increment' });
    }

    const handleDecrement = () => {
        cookiesCount--;
        history.unshift({ action: 'decrement' });
    }

    const handleReset = () => {
        cookiesCount = 0;
        history.unshift({ action: 'reset' });
    }
</script>

<div class="flex flex-col items-center h-screen">
    <SantaMood cookies={cookiesCount} />
    <CookieAction cookiesCount={cookiesCount} onIncrement={handleIncrement} onDecrement={handleDecrement} onReset={handleReset}/>
    <CookieHistory history={history}/>
</div>