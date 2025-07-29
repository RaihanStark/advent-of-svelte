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
});
