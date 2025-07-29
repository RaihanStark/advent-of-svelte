<script lang="ts">
	import Button from '../ui/button/button.svelte';

	let { cookiesCount = 0, onIncrement, onDecrement, onReset } = $props();

</script>

<div class="mt-5 flex items-center justify-center gap-4 w-full mb-5">
	<Button onclick={onDecrement} variant="secondary" size="icon" class="size-8" data-testid="dec-button">-</Button>
	<div data-testid="cookie-counter" class="text-2xl">
		{cookiesCount}
	</div>
	<Button onclick={onIncrement} variant="secondary" size="icon" class="size-8" data-testid="inc-button">+</Button>
</div>

<div class="flex w-full">
    <Button onclick={onReset} variant="secondary" data-testid="reset-button" class='w-full'>Reset</Button>
</div>
