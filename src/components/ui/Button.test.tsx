import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./Button";

describe("Button", () => {
    it("renders its children text", () => {
        render(<Button>Search</Button>);
        expect(screen.getByText("Search")).toBeInTheDocument();
    });

    it("applies the lime variant class by default", () => {
        render(<Button>Click</Button>);
        expect(screen.getByRole("button")).toHaveClass("bg-lime");
    });

    it("applies the blue variant class when specified", () => {
        render(<Button variant="blue">Click</Button>);
        expect(screen.getByRole("button")).toHaveClass("bg-brand");
    });

    it("calls onClick when clicked", async () => {
        const onClick = jest.fn();
        render(<Button onClick={onClick}>Click</Button>);
        await userEvent.click(screen.getByRole("button"));
        expect(onClick).toHaveBeenCalledTimes(1);
    });
});
