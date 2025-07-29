<script lang="ts">
    import { Input } from "$lib/components/ui/input/index.js";
    import { Button } from "$lib/components/ui/button/index.js";

    let { onAddChild } = $props()

    let forms = $state({
        name: '',
        tally: 0
    })

    let error = $state('')

    function resetForm() {
        forms.name = ''
        forms.tally = 0
        error = ''
    }

    function handleAddChild() {
        if (forms.name) {
            onAddChild({ ...forms })
            resetForm()
        } else {
            error = 'Name is required'
        } 
    }
</script>
    
{#if error}
<div class="text-red-500" data-testid="error-message">
    Name is required
</div>
{/if}
<Input data-testid="name-input" placeholder="Name" bind:value={forms.name} required />
<Input data-testid="tally-input" placeholder="Tally" type="number" bind:value={forms.tally} />
<Button data-testid="add-child-button" onclick={handleAddChild}>Add Child</Button>