import { page } from '@vitest/browser/context';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import ChildItem from './child-item.svelte';

describe('Child Item Component', () => {
	it('should render name, tally, and naughty badge', async () => {
		render(ChildItem, {
			props: {
				name: 'John',
				tally: -10
			}
		});

		expect(page.getByTestId('name')).toHaveTextContent('John');
		expect(page.getByTestId('tally')).toHaveTextContent('10');
		expect(page.getByTestId('naughty-badge')).toBeInTheDocument();
	});

	it('should not render naughtly badge if tally is positive', async () => {
		render(ChildItem, {
			props: {
				name: 'John',
				tally: 10
			}
		});

		await expect.poll(() => page.getByTestId('naughty-badge').query()).not.toBeInTheDocument()
	});

	it('should render a nice badge if tally is zero', async ()=> {
		render(ChildItem, {
			props: {
				name: 'John',
				tally: 0
			}
		})

		expect(page.getByTestId('nice-badge')).toBeInTheDocument()
	})

	it('should render if name is empty', async () => {
		render(ChildItem, {
			props: {
				name: '',
				tally: 0
			}
		})

		expect(page.getByTestId('name')).toHaveTextContent('Unnamed Child')
	})

	it('should render if name is undefined', async () => {
		render(ChildItem, {
			props: {
				tally: 0
			}
		})

		expect(page.getByTestId('name')).toHaveTextContent('Unnamed Child')
	})

	it('should render tally 0 if tally is undefined', async () => {
		render(ChildItem, {
			props: {
				name: 'John'
			}
		})

		expect(page.getByTestId('tally')).toHaveTextContent('0')
		expect(page.getByTestId('nice-badge')).toBeInTheDocument()
	})

	it('should round up tally to the nearest integer', async () => {
		render(ChildItem, {
			props: {
				name: 'John',
				tally: 1.7
			}
		})

		expect(page.getByTestId('tally')).toHaveTextContent('2')
	})

	it('should round down tally to the nearest integer', async () => {
		render(ChildItem, {
			props: {
				name: 'John',
				tally: 1.3
			}
		})

		expect(page.getByTestId('tally')).toHaveTextContent('1')
	})
});
