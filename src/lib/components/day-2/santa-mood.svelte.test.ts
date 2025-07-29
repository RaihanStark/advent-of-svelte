import { describe, expect, it } from "vitest";
import { render } from "vitest-browser-svelte";
import SantaMood from "./santa-mood.svelte";
import { page } from "@vitest/browser/context";

describe("Santa Mood", () => {
	it("should render neutral mood on 0 cookies", () => {
		render(SantaMood, {
            props: {
                cookies: 0
            }
        });
		expect(page.getByTestId("mood-emoji")).toHaveTextContent("😐");
		expect(page.getByTestId("mood-text")).toHaveTextContent("Neutral");
	});

    it("should render happy mood on 1-3 cookies", () => {
        render(SantaMood, {
            props: {
                cookies: 2
            }
        });
        expect(page.getByTestId("mood-emoji")).toHaveTextContent("🙂");
        expect(page.getByTestId("mood-text")).toHaveTextContent("Happy");
    });

    it('should render very merry mood on 4-6 cookies', () => {
        render(SantaMood, {
            props: {
                cookies: 5
            }
        });
        expect(page.getByTestId("mood-emoji")).toHaveTextContent("😄");
        expect(page.getByTestId("mood-text")).toHaveTextContent("Very Merry");
    });

    it('should render overjoyed mood on 7+ cookies', () => {
        render(SantaMood, {
            props: {
                cookies: 7
            }
        });
        expect(page.getByTestId("mood-emoji")).toHaveTextContent("🎅✨");
        expect(page.getByTestId("mood-text")).toHaveTextContent("Overjoyed");
    });

    it('should render angry mood on below zero cookies', () => {
        render(SantaMood, {
            props: {
                cookies: -1
            }
        });
        expect(page.getByTestId("mood-emoji")).toHaveTextContent("😠");
        expect(page.getByTestId("mood-text")).toHaveTextContent("Angry");
    });
});