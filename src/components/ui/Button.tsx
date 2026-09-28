import { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "lime" | "blue" | "white";
};

const variants = {
    lime: "bg-lime text-ink hover:brightness-95",
    blue: "bg-brand text-white hover:brightness-110",
    white: "bg-white text-ink hover:bg-gray-100",
};

export default function Button({
    variant = "lime",
    className = "",
    ...props
}: Props) {
    return (
        <button
            className={`rounded-full px-6 py-3 text-sm font-medium transition ${variants[variant]} ${className}`}
            {...props}
        />
    );
}
