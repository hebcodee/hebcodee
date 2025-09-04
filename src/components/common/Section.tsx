import * as React from "react"

import { cn } from "@/lib/utils"

function Section({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="section"
            className={cn(
                "mb-20 mt-10",
                className
            )}
            {...props}
        />
    )
}


function SectionTitle({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="section-title"
            className={cn("font-semibold text-[20] mb-5", className)}
            {...props}
        />
    )
}


function SectionContent({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="card-content"
            className={cn("space-y-6 text-[12px] text-[#979797] w-5/6", className)}
            {...props}
        />
    )
}



export {
    Section,
    SectionTitle,
    SectionContent,
}
