import { render, screen } from "@testing-library/react";
import CourseCard from "./CourseCard";
import type { Course } from "@/data/courses";

const mockCourse: Course = {
    id: 1,
    title: "Learn Figma from Basic",
    creator: "purepearl studio",
    image: "/images/courses/course-1.png",
    lessons: 17,
    duration: "2 hours 16 mins",
    rating: 4.5,
    level: "Beginner",
    price: 25,
};

describe("CourseCard", () => {
    it("renders the course title", () => {
        render(<CourseCard course={mockCourse} />);
        expect(screen.getByText("Learn Figma from Basic")).toBeInTheDocument();
    });

    it("renders the creator name", () => {
        render(<CourseCard course={mockCourse} />);
        expect(screen.getByText("purepearl studio")).toBeInTheDocument();
    });

    it("renders the price with a dollar sign and /lifetime suffix", () => {
        render(<CourseCard course={mockCourse} />);
        expect(screen.getByText(/\$25/)).toBeInTheDocument();
        expect(screen.getByText("/lifetime")).toBeInTheDocument();
    });

    it("renders the course level", () => {
        render(<CourseCard course={mockCourse} />);
        expect(screen.getByText("Beginner")).toBeInTheDocument();
    });
});
