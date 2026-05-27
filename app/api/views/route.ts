import { kv } from "@vercel/kv"
import { NextResponse } from "next/server"

const VIEW_KEY = "greenera-total-views"

export async function POST() {
    let views = await kv.get<number>(VIEW_KEY)

    // Initial starting value
    if (!views) {
        views = 1045345
        await kv.set(VIEW_KEY, views)
    }

    // Increment EVERY page view
    const updatedViews = await kv.incr(VIEW_KEY)

    return NextResponse.json({
        totalViews: updatedViews,
    })
}

export async function GET() {
    const views = await kv.get<number>(VIEW_KEY)

    return NextResponse.json({
        totalViews: views || 1045345,
    })
}