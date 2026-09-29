export type Testimonial = {
    id: number;
    name: string;
    role: string;
    avatar: string;
    quote: string;
};

export const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "Sarah M.",
        role: "Enthusiastic Learner",
        avatar: "/images/testimonials/1.png",
        quote:
            "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.",
    },
    {
        id: 2,
        name: "James L.",
        role: "Lifelong Learner",
        avatar: "/images/testimonials/2.png",
        quote:
            "The tried-around online learning platforms, and ByteSpace stands out for its ability to offer creators the variety of courses available. The easy navigation and engaging content make it a perfect platform for continuous skill development.",
    },
    {
        id: 3,
        name: "Alex B.",
        role: "Inspired Creator",
        avatar: "/images/testimonials/3.png",
        quote:
            "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. I'm fulfilling in also becoming inspiring a positive impact on global growth globally.",
    },
];
