import Container from "@/components/ui/Container";
import CategoryChips from "@/components/ui/CategoryChips";
import CourseCard from "@/components/ui/CourseCard";
import { categories, courses } from "@/data/courses";

export default function DiscoverCourses() {
    return (
        <section id="courses" className="py-20">
            <Container>
                <div className="text-center">
                    <h2 className="text-3xl font-semibold md:text-4xl">
                        Discover Your Passion,
                        <br />
                        Build Your Skills
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-sm text-gray-500">
                        At ByteSpace Courses, we bring you a variety of courses across
                        different fields, from technology to the arts, and make a
                        difference in your career and life.
                    </p>
                </div>

                <CategoryChips items={categories} />

                <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {courses.map((course) => (
                        <CourseCard key={course.id} course={course} />
                    ))}
                </div>
            </Container>
        </section>
    );
}
