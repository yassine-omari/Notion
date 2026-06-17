"use client"

import { createClient } from "@/lib/supabase/client"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function SignupPage() {
    const supabase = createClient()
    const router = useRouter()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    async function handleSignup(e: React.FormEvent) {
        e.preventDefault()

        const { error } = await supabase.auth.signUp({
            email,
            password,
        })

        if (error) {
            setError(error.message)
            return
        }

        router.push("/dashboard")
        router.refresh()
    }

    return (
        <div className="w-full max-w-sm bg-white rounded-xl p-8 shadow">
            <h1 className="text-2xl font-semibold mb-6">
                Create account
            </h1>

            <form onSubmit={handleSignup} className="space-y-4">
                <input
                    className="w-full border rounded-md p-2"
                    placeholder="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    className="w-full border rounded-md p-2"
                    placeholder="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                {error && (
                    <p className="text-sm text-red-500">
                        {error}
                    </p>
                )}

                <button
                    className="w-full bg-black text-white rounded-md p-2"
                >
                    Signup
                </button>
            </form>

            <p className="mt-4 text-sm">
                Already have an account?{" "}
                <a href="/login" className="underline">
                    Login
                </a>
            </p>
        </div>
    )
}