"use client"

import { Suspense } from "react"
import { useSearchParams } from "next/navigation"

function ViewerContent() {
    const searchParams = useSearchParams()

    const file = searchParams.get("file")

    if (!file) {
        return (
            <div className="flex items-center justify-center h-screen bg-gray-100">
                <h1 className="text-2xl font-semibold text-gray-700">
                    No PDF Selected
                </h1>
            </div>
        )
    }

    return (
        <div
            className="w-full h-screen overflow-hidden bg-gray-100"
            onContextMenu={(e) => e.preventDefault()}
        >
            <iframe
                src={`${file}#toolbar=0&navpanes=0&scrollbar=0`}
                className="w-full h-full border-0"
                title="PDF Viewer"
            />
        </div>
    )
}

export default function Page() {
    return (
        <Suspense
            fallback={
                <div className="flex items-center justify-center h-screen">
                    <h1 className="text-xl font-medium">
                        Loading PDF...
                    </h1>
                </div>
            }
        >
            <ViewerContent />
        </Suspense>
    )
}