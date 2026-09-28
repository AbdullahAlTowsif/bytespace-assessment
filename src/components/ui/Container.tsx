import { ReactNode } from "react";

type Props = { children: ReactNode; className?: string };

export default function Container({ children, className = "" }: Props) {
    return (
        <div className={`mx-auto w-full max-w-300 px-5 ${className}`}>
            {children}
        </div>
    );
}
