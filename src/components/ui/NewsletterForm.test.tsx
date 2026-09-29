import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NewsletterForm from "./NewsletterForm";

describe("NewsletterForm", () => {
    it("renders an email input with the correct placeholder", () => {
        render(<NewsletterForm />);
        expect(
            screen.getByPlaceholderText("Enter your email")
        ).toBeInTheDocument();
    });

    it("updates the input value as the user types", async () => {
        render(<NewsletterForm />);
        const input = screen.getByPlaceholderText("Enter your email");
        await userEvent.type(input, "test@example.com");
        expect(input).toHaveValue("test@example.com");
    });

    it("shows a thank-you message after submitting a valid email", async () => {
        render(<NewsletterForm />);
        const input = screen.getByPlaceholderText("Enter your email");
        await userEvent.type(input, "test@example.com");
        await userEvent.click(screen.getByRole("button", { name: "Search" }));
        expect(
            await screen.findByText("Thanks for subscribing!")
        ).toBeInTheDocument();
    });
});
