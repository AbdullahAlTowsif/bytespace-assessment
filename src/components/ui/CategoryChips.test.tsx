import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CategoryChips from "./CategoryChips";

const items = ["Featured", "Music", "Marketing"];

describe("CategoryChips", () => {
    it("marks the first item active by default", () => {
        render(<CategoryChips items={items} />);
        expect(screen.getByText("Featured")).toHaveClass("bg-lime");
    });

    it("makes a chip active when clicked", async () => {
        render(<CategoryChips items={items} />);
        await userEvent.click(screen.getByText("Music"));
        expect(screen.getByText("Music")).toHaveClass("bg-lime");
        expect(screen.getByText("Featured")).not.toHaveClass("bg-lime");
    });
});
