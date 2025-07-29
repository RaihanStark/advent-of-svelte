import { describe, expect, it } from "vitest";
import { render } from "vitest-browser-svelte";
import Page from "./+page.svelte";
import { page } from "@vitest/browser/context";

describe('Day 1 Page Integration Test', () => {
    it('should show empty list of children', async () => {
        render(Page, {
            props: {
                data: {
                    childs: []
                }
            }
        })

        expect(page.getByTestId('empty-child')).toHaveTextContent('No children')
    })

    it('should add child to the list', async () => {
        render(Page, {
            props: {
                data: {
                    childs: [
                    ]
                }
            }
        })

        const nameInput = page.getByTestId('name-input')
        const tallyInput = page.getByTestId('tally-input')
        const addChildButton = page.getByTestId('add-child-button')

        await nameInput.fill('John')
        await tallyInput.fill('10')
        await addChildButton.click()
        
        expect(page.getByTestId('child-list')).toHaveTextContent('John')
        expect(page.getByTestId('child-list')).toHaveTextContent('10')
        expect(page.getByTestId('child-list')).toHaveTextContent('Nice')
    })

    it("shouldn't be able to add child if no name provided", async () => {
        render(Page, {
            props: {
                data: {
                    childs: []
                }
            }
        })

        const tallyInput = page.getByTestId('tally-input')
        const addChildButton = page.getByTestId('add-child-button')

        await tallyInput.fill('10')
        await addChildButton.click()

        expect(page.getByTestId('error-message')).toHaveTextContent('Name is required')
        expect(page.getByTestId('empty-child')).toHaveTextContent('No children')
    })
})