"use client"

import { useSearchParams } from "next/navigation"

export default function DocumentViewerPage() {
    const searchParams = useSearchParams()

    const file = searchParams.get("file")

    return (
        <div className="w-screen h-screen">
            {file && (
                <iframe
                    src={file}
                    className="w-full h-full"
                />
            )}
        </div>
    )
}