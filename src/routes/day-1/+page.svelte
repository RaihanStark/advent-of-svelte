<script lang="ts">
	import AddChildForm from "$lib/components/day-1/add-child-form.svelte";
	import ChildList from "$lib/components/day-1/child-list.svelte";
	import type { PageProps } from "./$types";

    let { data }: PageProps = $props()

	let childs = $state<Child[]>(data.childs || [])

	interface Child {
		name: string
		tally: number
	}

    function handleAddChild(child: Child) {
		childs.push(child)
    }
</script>

<AddChildForm onAddChild={handleAddChild} />
<ChildList childs={childs} />