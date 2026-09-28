import AvatarStack from "@/components/ui/AvatarStack";

export default function StudentsCard({ className = "" }: { className?: string }) {
    return (
        <div className={`rounded-xl bg-white p-4 shadow-lg ${className}`}>
            <p className="text-base">Happy Students</p>
            <p className="text-xs">
                <span className="font-medium">4.5</span>{" "}
                <span className="text-gray-400">(240)</span>{" "}
                <span className="text-lime">★</span>
            </p>
            <div className="mt-2">
                <AvatarStack count={6} label="2K+" size="md" />
            </div>
        </div>
    );
}
