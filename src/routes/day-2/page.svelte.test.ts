import { describe, expect, it } from "vitest";
import { render } from "vitest-browser-svelte";
import Page from "./+page.svelte";
import { page } from "@vitest/browser/context";

describe('Day 2 Page Integration Test', () => {
    it('should show initial value of cookies', async () => {
        render(Page)

        expect(page.getByTestId('cookie-counter')).toHaveTextContent('0')
        expect(page.getByTestId('cookie-history')).toHaveTextContent('No History')
        expect(page.getByTestId('mood-text')).toHaveTextContent('Neutral')
    })

    it('should increment cookies when increment button is clicked', async () => {
        render(Page)

        const incrementButton = page.getByTestId('inc-button')
        await incrementButton.click()

        expect(page.getByTestId('cookie-counter')).toHaveTextContent('1')
        expect(page.getByTestId('cookie-history')).toHaveTextContent('Santa ate a cookie')
        expect(page.getByTestId('mood-text')).toHaveTextContent('Happy')
    })

    it('should decrement cookies when decrement button is clicked', async () => {
        render(Page)

        const decrementButton = page.getByTestId('dec-button')
        await decrementButton.click()

        expect(page.getByTestId('cookie-counter')).toHaveTextContent('-1')
        expect(page.getByTestId('cookie-history')).toHaveTextContent('Santa throw a cookie')
        expect(page.getByTestId('mood-text')).toHaveTextContent('Angry')
    })

    it('should reset cookies when reset button is clicked', async () => {
        render(Page)

        const resetButton = page.getByTestId('reset-button')
        await resetButton.click()

        expect(page.getByTestId('cookie-counter')).toHaveTextContent('0')
        expect(page.getByTestId('mood-text')).toHaveTextContent('Neutral')
    })
})