"use client"
import SpinnerPinwheel from "@/components/shadcn-space/spinner/spinner-03"
import { div } from "motion/react-client"
import React from "react"
export default function Loading() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-muted">
            <SpinnerPinwheel />
        </div>
    )
}