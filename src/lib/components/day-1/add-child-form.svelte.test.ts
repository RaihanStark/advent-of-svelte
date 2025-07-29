import { beforeEach, describe, expect, it, vi, type Mock } from "vitest";
import { render } from "vitest-browser-svelte";
import AddChildForm from "./add-child-form.svelte";
import { page } from "@vitest/browser/context";


describe('Add Child Form Component', () => {
    let onAddChild: ReturnType<typeof vi.fn>
    beforeEach(() => {
        onAddChild = vi.fn()
		render(AddChildForm, {
            props: {
                onAddChild,
            }
        })
    })
	it('should render a form with inputs and a button', async () => {
        expect(page.getByTestId('name-input')).toBeInTheDocument()
        expect(page.getByTestId('tally-input')).toBeInTheDocument()
        expect(page.getByTestId('add-child-button')).toBeInTheDocument()
	})

    it('should have tally input as type number', async () => {
        const tallyInput = page.getByTestId('tally-input')
        expect(tallyInput).toHaveAttribute('type', 'number')
    })

    it('should have name input with placeholder "Name"', async () => {
        const nameInput = page.getByTestId('name-input')
        expect(nameInput).toHaveAttribute('placeholder', 'Name')
    })

    it('should have tally input with placeholder "Tally"', async () => {
        const tallyInput = page.getByTestId('tally-input')
        expect(tallyInput).toHaveAttribute('placeholder', 'Tally')
    })

    it('shold prepopulate tally input with 0', async () => {
        const tallyInput = page.getByTestId('tally-input')
        expect(tallyInput).toHaveValue(0)
    })

    it('should return data when add child button is clicked', async () => {
        const nameInput = page.getByTestId('name-input')
        const tallyInput = page.getByTestId('tally-input')
        const addChildButton = page.getByTestId('add-child-button')

        await nameInput.fill('John')
        await tallyInput.fill('10')
        await addChildButton.click()

        expect(onAddChild).toHaveBeenCalledWith({
            name: 'John',
            tally: 10
        })
    })

    it('should reset the form when add child button is clicked', async () => {
        const nameInput = page.getByTestId('name-input')
        const tallyInput = page.getByTestId('tally-input')
        const addChildButton = page.getByTestId('add-child-button')

        await nameInput.fill('John')
        await tallyInput.fill('10')
        await addChildButton.click()

        expect(nameInput).toHaveValue('')
        expect(tallyInput).toHaveValue(0)
    })

    it('should not add child if name is empty', async () => {
		await expect.poll(() => page.getByTestId('error-message').query()).not.toBeInTheDocument()

        const tallyInput = page.getByTestId('tally-input')
        const addChildButton = page.getByTestId('add-child-button')

        await tallyInput.fill('10')
        await addChildButton.click()

        expect(onAddChild).not.toHaveBeenCalled()
        expect(page.getByTestId('error-message')).toHaveTextContent('Name is required')
    })
})