import { render, screen } from "@testing-library/react";
import Container from "./Container";

describe("Container", () => {
    it("renders its children", () => {
        render(<Container>Hello</Container>);
        expect(screen.getByText("Hello")).toBeInTheDocument();
    });

    it("applies the max-width class and any extra className passed in", () => {
        render(<Container className="text-center">Hi</Container>);
        const el = screen.getByText("Hi");
        expect(el).toHaveClass("max-w-300");
        expect(el).toHaveClass("text-center");
    });
});
