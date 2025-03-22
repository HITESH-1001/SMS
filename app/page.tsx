import RoleRedirect from "@/components/role-redirect"
import WelcomePage from "./welcome-page"

export default function Home() {
  // If the user is already logged in, they'll be redirected to their appropriate dashboard
  // Otherwise, they'll see the welcome page
  return (
    <>
      <WelcomePage />
      <div className="hidden">
        <RoleRedirect />
      </div>
    </>
  )
}

