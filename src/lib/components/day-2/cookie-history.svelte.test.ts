import { describe, expect, it } from "vitest";
import { render } from "vitest-browser-svelte";
import CookieHistory from "./cookie-history.svelte";
import { page } from "@vitest/browser/context";

describe('Cookie History', () => {
    it('should render cookie history', () => {
        render(CookieHistory);
        expect(page.getByTestId("cookie-history")).toHaveTextContent("No History");
    });

    it('should render cookie history list increment', () => {
        render(CookieHistory, {
            props: {
                history: [
                    {
                        action: 'increment',
                    },
                ]
            }
        });

        expect(page.getByTestId("cookie-history")).toHaveTextContent("Santa ate a cookie");
        expect(page.getByTestId("cookie-history")).toHaveTextContent("+1");
    });

    it('should render cookie history list decrement', () => {
        render(CookieHistory, {
            props: {
                history: [
                    {
                        action: 'decrement',
                    }
                ]
            }
        });

        expect(page.getByTestId("cookie-history")).toHaveTextContent("Santa throw a cookie");
        expect(page.getByTestId("cookie-history")).toHaveTextContent("-1");
    });

    it('should render cookie history list reset', () => {
        render(CookieHistory, {
            props: {   
                history: [
                    {
                        action: 'reset',
                    }
                ]
            }
        });

        expect(page.getByTestId("cookie-history")).toHaveTextContent("Santa dumps the cookies");
        expect(page.getByTestId("cookie-history")).toHaveTextContent("0");
    })
});