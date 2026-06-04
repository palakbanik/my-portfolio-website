import { cn } from "@/lib/utils";
import { InputProps } from "@/types";

export default function Input({
    type = "text",
    className,
    error,
    placeholder,
    ...props
}: InputProps) {
    return (
        <div>
            <input
                type={type}
                placeholder={placeholder}
                className={cn(
                    "w-full h-auto bg-pb-body rounded-lg px-[20px] py-[12px] text-[14px] sm:text-[16px] border border-pb-grey-2 outline-none focus:border-pb-theme-primary duration-500 ease transition-colors",
                    className,
                )}
                {...props}
            />

            {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
        </div>
    );
}
