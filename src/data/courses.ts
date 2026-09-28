export type Course = {
    id: number;
    title: string;
    creator: string;
    image: string;
    lessons: number;
    duration: string;
    rating: number;
    level: "Beginner" | "Intermediate" | "Advanced";
    price: number;
};

export const courses: Course[] = [
    {
        id: 1,
        title: "Learn Figma from Basic",
        creator: "purepearl studio",
        image: "/images/courses/course-1.jpg",
        lessons: 17,
        duration: "2 hours 16 mins",
        rating: 4.5,
        level: "Beginner",
        price: 25,
    },
    {
        id: 2,
        title: "Build Digital Asset",
        creator: "purepearl studio",
        image: "/images/courses/course-2.jpg",
        lessons: 17,
        duration: "2 hours 16 mins",
        rating: 4.5,
        level: "Beginner",
        price: 25,
    },
    {
        id: 3,
        title: "The Power of Big Data",
        creator: "purepearl studio",
        image: "/images/courses/course-3.jpg",
        lessons: 17,
        duration: "2 hours 16 mins",
        rating: 4.5,
        level: "Beginner",
        price: 25,
    },
    {
        id: 4,
        title: "Balancing Productivity and Life",
        creator: "purepearl studio",
        image: "/images/courses/course-3.jpg",
        lessons: 17,
        duration: "2 hours 16 mins",
        rating: 4.5,
        level: "Beginner",
        price: 25,
    },
    {
        id: 5,
        title: "Mastering Money Management",
        creator: "purepearl studio",
        image: "/images/courses/course-2.jpg",
        lessons: 17,
        duration: "2 hours 16 mins",
        rating: 4.5,
        level: "Beginner",
        price: 25,
    },
    {
        id: 6,
        title: "From Idea to Startup Success",
        creator: "purepearl studio",
        image: "/images/courses/course-1.jpg",
        lessons: 17,
        duration: "2 hours 16 mins",
        rating: 4.5,
        level: "Beginner",
        price: 25,
    },
];

export const categories = [
    "Featured",
    "Music",
    "Drawing & Painting",
    "Marketing",
    "Animation",
    "Social Media",
    "UX/UI Design",
    "Creative Marketing",
    "Illustration",
    "Film & Video",
    "Crafts",
    "Freelance & Entrepreneurship",
    "Graphic Design",
    "Photography",
    "Productivity",
    "Web Development",
    "Data Science",
    "Coding",
];
