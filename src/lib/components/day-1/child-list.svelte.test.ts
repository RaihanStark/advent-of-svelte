import { beforeEach, describe, expect, it } from "vitest";
import { render } from "vitest-browser-svelte";
import ChildList from "./child-list.svelte";
import { page } from "@vitest/browser/context";

describe('Child List Component', () => {
	it('should render a list of children', async () => {
        render(ChildList, {
			props: {
                childs: [
                    {
                        name: 'John',
                        tally: 10
                    },
                    {
                        name: 'Jane',
                        tally: -10
                    },
                    {
                        name: 'Jim',
                        tally: 0
                    }
                ]
            }
		})

        const childOne = page.getByTestId('child-item-0')
        const childTwo = page.getByTestId('child-item-1')
        const childThree = page.getByTestId('child-item-2')

        expect(childOne).toHaveTextContent('John')
        expect(childOne).toHaveTextContent('10')
        expect(childOne).toHaveTextContent('Nice')

        expect(childTwo).toHaveTextContent('Jane')
        expect(childTwo).toHaveTextContent('10')
        expect(childTwo).toHaveTextContent('Naughty')

        expect(childThree).toHaveTextContent('Jim')
        expect(childThree).toHaveTextContent('0')
        expect(childThree).toHaveTextContent('Nice')
	})

    it('should render an empty list with no children', async () => {
        render(ChildList, {
            props: {
                childs: []
            }
        })

        await expect.poll(() => page.getByTestId('child-item-0').query()).not.toBeInTheDocument()
        await expect.poll(() => page.getByTestId('empty-child')).toBeInTheDocument()
    })

})