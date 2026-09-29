import { courses, categories } from "./courses";

describe("courses data", () => {
    it("every course has a title and a positive price", () => {
        courses.forEach((course) => {
            expect(course.title.length).toBeGreaterThan(0);
            expect(course.price).toBeGreaterThan(0);
        });
    });

    it("categories includes 'Featured' as the first item", () => {
        expect(categories[0]).toBe("Featured");
    });
});
