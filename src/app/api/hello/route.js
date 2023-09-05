import { NextResponse } from "next/server"

export function GET(req, res) {
    if (req.method === 'GET') {
        return NextResponse.json({ message: "Hello!"})
    }
}