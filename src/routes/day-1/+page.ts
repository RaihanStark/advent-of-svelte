import type { PageLoad } from "./$types";

export const load: PageLoad = async () => {
    const response = await fetch('https://advent.sveltesociety.dev/data/2023/day-one.json')
    const data = await response.json()

    return {
        childs: data
    }
}