<script>
    let {cookies} = $props()

    const MOOD = {
        ANGRY: {
            text: "Angry",
            emoji: "😠",
            range: [-Infinity, -1]
        },
        NEUTRAL: {
            text: "Neutral",
            emoji: "😐",
            range: [0, 0]
        },
        HAPPY: {
            text: "Happy",
            emoji: "🙂",
            range: [1, 3]
        },
        VERY_MERRY: {
            text: "Very Merry",
            emoji: "😄",
            range: [4, 6]
        },
        OVERJOYED: {
            text: "Overjoyed",
            emoji: "🎅✨",
            range: [7, Infinity]
        }
    }
</script>

{#each Object.values(MOOD) as mood}
    {#if cookies >= mood.range[0] && cookies <= mood.range[1]}
        <div class="text-5xl mb-5" data-testid="mood-text">{mood.text}</div>
        <div class="text-8xl" data-testid="mood-emoji">{mood.emoji}</div>
    {/if}
{/each}