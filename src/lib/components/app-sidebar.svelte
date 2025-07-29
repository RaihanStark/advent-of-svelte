<script lang="ts">
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';

	let { title = $bindable(), selected = $bindable() } = $props();

	// Menu items.
	const items = [
		{
			title: 'Day 1: Naughty or Nice',
			url: '/day-1',
		},
		{
			title: 'Day 2: Merry Munch-o-Meter',
			url: '/day-2',
		}
	];
</script>

<Sidebar.Root>
	<Sidebar.Content>
		<Sidebar.Group>
			<Sidebar.GroupLabel>Advent of Svelte</Sidebar.GroupLabel>
			<Sidebar.GroupContent>
				<Sidebar.Menu>
					{#each items as item (item.title)}
						<Sidebar.MenuItem onclick={() => { title = item.title; selected = item.url; }}>
							<Sidebar.MenuButton isActive={selected === item.url}>
								{#snippet child({ props })}
									<a href={item.url} {...props}>
										<span>{item.title}</span>
									</a>
								{/snippet}
							</Sidebar.MenuButton>
						</Sidebar.MenuItem>
					{/each}
				</Sidebar.Menu>
			</Sidebar.GroupContent>
		</Sidebar.Group>
	</Sidebar.Content>
</Sidebar.Root>
