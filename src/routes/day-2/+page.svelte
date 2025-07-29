<script lang="ts">
	import CookieAction from "$lib/components/day-2/cookie-action.svelte";
    import CookieHistory from "$lib/components/day-2/cookie-history.svelte";
    import SantaMood from "$lib/components/day-2/santa-mood.svelte";

    interface History {
        id: number;
        action: 'increment' | 'decrement' | 'reset';
    }

    let history: History[] = $state([]);
    let cookiesCount = $state(0);
    let nextId = $state(0);

    const handleIncrement = () => {
        cookiesCount++;
        history.unshift({ id: nextId++, action: 'increment' });
    }

    const handleDecrement = () => {
        cookiesCount--;
        history.unshift({ id: nextId++, action: 'decrement' });
    }

    const handleReset = () => {
        cookiesCount = 0;
        history.unshift({ id: nextId++, action: 'reset' });
    }
</script>

<div class="flex flex-col items-center h-screen">
    <SantaMood cookies={cookiesCount} />
    <CookieAction cookiesCount={cookiesCount} onIncrement={handleIncrement} onDecrement={handleDecrement} onReset={handleReset}/>
    <CookieHistory history={history}/>
</div>