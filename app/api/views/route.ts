import { kv } from "@vercel/kv"
import { NextResponse } from "next/server"

const VIEW_KEY = "greenera-total-views"

export async function GET() {
    let views = await kv.get<number>(VIEW_KEY)

    // Initial count migration
    if (!views) {
        views = 1045345
        await kv.set(VIEW_KEY, views)
    }

    // Increment global counter
    views = await kv.incr(VIEW_KEY)

    return NextResponse.json({
        totalViews: views,
    })
}