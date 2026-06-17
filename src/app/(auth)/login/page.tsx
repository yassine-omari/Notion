"use client"

import { createClient } from "@/lib/supabase/client"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function LoginPage() {
    const supabase = createClient()
    const router = useRouter()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    async function handleLogin(e: React.FormEvent) {
        e.preventDefault()

        const { error } = await supabase.auth.signInWithPassword({
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
                Login
            </h1>

            <form onSubmit={handleLogin} className="space-y-4">
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
                    Login
                </button>
            </form>

            <p className="mt-4 text-sm">
                No account?{" "}
                <a href="/signup" className="underline">
                    Signup
                </a>
            </p>
        </div>
    )
}