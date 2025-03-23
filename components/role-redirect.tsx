

"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "./auth-provider"
import { Loader2 } from "lucide-react"

export default function RoleRedirect() {
  const { user, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading) {
      if (user) {
        // Only redirect if user is already logged in
        if (user.role === "admin") {
          router.push("/admin")
        } else if (user.role === "authority") {
          router.push("/authority")
        } else {
          router.push("/dashboard")
        }
      }
      // If not logged in, don't redirect - let the user see the current page
    }
  }, [user, loading, router])

  // Only show loading if we're checking auth and user is logged in
  if (loading && user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center gap-2">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <p className="text-muted-foreground">Redirecting to your dashboard...</p>
        </div>
      </div>
    )
  }

  // Return null if not logged in or not loading
  return null
}

