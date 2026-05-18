"use client"

import { Suspense } from "react"
import { useSearchParams } from "next/navigation"

function ViewerContent() {
    const searchParams = useSearchParams()

    const file = searchParams.get("file")

    if (!file) {
        return (
            <div className="flex items-center justify-center h-screen text-xl">
                No PDF selected
            </div>
        )
    }

    return (
        <div className="w-full h-screen">
            <iframe
                src={file}
                className="w-full h-full"
                title="PDF Viewer"
            />
        </div>
    )
}

export default function Page() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ViewerContent />
        </Suspense>
    )
}