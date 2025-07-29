<script lang="ts">
	import ChildList from "$lib/components/day-1/child-list.svelte";
	import type { PageProps } from "./$types";

    let { data }: PageProps = $props()

</script>

<ChildList childs={data.childs} />