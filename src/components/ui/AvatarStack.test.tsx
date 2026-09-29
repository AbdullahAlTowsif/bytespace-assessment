import { render, screen } from "@testing-library/react";
import AvatarStack from "./AvatarStack";

describe("AvatarStack", () => {
    it("renders 6 avatar images by default", () => {
        const { container } = render(<AvatarStack />);
        expect(container.querySelectorAll("img")).toHaveLength(6);
    });

    it("renders a custom number of avatars", () => {
        const { container } = render(<AvatarStack count={3} />);
        expect(container.querySelectorAll("img")).toHaveLength(3);
    });

    it("shows the default '2K+' label", () => {
        render(<AvatarStack />);
        expect(screen.getByText("2K+")).toBeInTheDocument();
    });

    it("shows a custom label when passed", () => {
        render(<AvatarStack label="500+" />);
        expect(screen.getByText("500+")).toBeInTheDocument();
    });
});
