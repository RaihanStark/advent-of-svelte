import { beforeEach, describe, expect, it, vi } from "vitest";
import { render } from "vitest-browser-svelte";
import CookieAction from "./cookie-action.svelte";
import { page } from "@vitest/browser/context";

describe("Cookie Action", () => {
    const onIncrement = vi.fn();
    const onDecrement = vi.fn();
    const onReset = vi.fn();

    beforeEach(() => {
        vi.clearAllMocks();
    });

    it("should render cookie counter", () => {
        render(CookieAction);
        expect(page.getByTestId("cookie-counter")).toHaveTextContent("0");
    });

    it('should render cookie counter with props cookiesCount', () => {
        render(CookieAction, {
            props: {
                cookiesCount: 10
            }
        });
        expect(page.getByTestId("cookie-counter")).toHaveTextContent("10");
    });

    it('should render action button', () => {
        render(CookieAction);
        expect(page.getByTestId("inc-button")).toHaveTextContent("+");
        expect(page.getByTestId("dec-button")).toHaveTextContent("-");
        expect(page.getByTestId("reset-button")).toHaveTextContent("Reset");
    });

    it('should increment cookie count when increment button is clicked', async () => {
        render(CookieAction, {
            props: {
                onIncrement
            }
        });
        const incButton = page.getByTestId("inc-button");
        await incButton.click();

        expect(onIncrement).toHaveBeenCalled()
    });

    it('should decrement cookie count when decrement button is clicked', async () => {
        render(CookieAction, {
                props: {
                    onDecrement
                }
            }
        );
        const decButton = page.getByTestId("dec-button");
        await decButton.click();

        expect(onDecrement).toHaveBeenCalled()
    });

    it('should reset cookie count when reset button is clicked', async () => {
        render(CookieAction, {
            props: {
                cookiesCount: 1,
                onReset
            }
        });
        const resetButton = page.getByTestId("reset-button");
        await resetButton.click();

        expect(onReset).toHaveBeenCalled() 
    });
});