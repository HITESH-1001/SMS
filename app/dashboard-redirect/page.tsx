// import RoleRedirect from "@/components/role-redirect"

// export default function DashboardRedirect() {
//   return <RoleRedirect />
// }

"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/components/auth-provider"
import { Loader2 } from "lucide-react"

export default function DashboardRedirect() {
  const { user, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading) {
      if (user) {
        // Redirect based on role
        if (user.role === "admin") {
          router.push("/admin")
        } else if (user.role === "authority") {
          router.push("/authority")
        } else {
          router.push("/dashboard")
        }
      } else {
        // If not logged in, redirect to login
        router.push("/auth/login")
      }
    }
  }, [user, loading, router])

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-2">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
        <p className="text-muted-foreground">Redirecting to your dashboard...</p>
      </div>
    </div>
  )
}

