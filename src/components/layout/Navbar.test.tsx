import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Navbar from "./Navbar";

describe("Navbar", () => {
    it("shows only the desktop 'Sign In' link when the mobile menu is closed", () => {
        render(<Navbar />);
        expect(screen.getAllByText("Sign In")).toHaveLength(1);
    });

    it("shows a second 'Sign In' link after opening the mobile menu", async () => {
        render(<Navbar />);
        await userEvent.click(screen.getByLabelText("Toggle menu"));
        expect(screen.getAllByText("Sign In")).toHaveLength(2);
    });
});
