import Button from "@/components/ui/Button";
import Link from "next/link";

export default function NotFound() {
    return (
        <section className="min-h-screen bg-pb-theme-accent-1 flex items-center justify-center px-5 relative overflow-hidden">
            {/* blur effect */}
            <div className="w-[250px] sm:w-[350px] aspect-square rounded-full bg-pb-theme-primary/20 blur-[120px] absolute top-[-80px] left-[-80px] animate-pulse" />

            <div className="w-[250px] sm:w-[350px] aspect-square rounded-full bg-pb-theme-secondary/30 blur-[120px] absolute bottom-[-100px] right-[-100px] animate-pulse" />

            {/* main content */}
            <div className="relative z-10 text-center max-w-[650px]">
                {/* 404 */}
                <h1 className="font-russo-one text-[90px] sm:text-[140px] md:text-[180px] leading-none bg-gradient-to-b from-pb-white to-pb-theme-primary bg-clip-text text-transparent">
                    404
                </h1>

                {/* heading */}
                <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                    Page Not Found
                </h2>

                {/* description */}
                <p className="mt-4 text-sm sm:text-base leading-relaxed text-pb-grey-1 px-2">
                    The page you’re looking for doesn’t exist or may have been
                    moved somewhere else.
                </p>

                {/* button */}
                <div className="mt-8">
                    <Link href="/">
                        <Button variant="outline">Back to Homepage</Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
