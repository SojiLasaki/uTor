import { useEffect, useState } from "react"
import { DashboardPage } from "./pages/DashboardPage"
import { LandingPage } from "./pages/LandingPage"
import { LoginPage } from "./pages/LoginPage"
import { OtherPages, type PageName } from "./pages/OtherPages"

function App() {
  const [view, setView] = useState(() => window.location.hash)

  useEffect(() => {
    const updateView = () => setView(window.location.hash)
    window.addEventListener("hashchange", updateView)
    return () => window.removeEventListener("hashchange", updateView)
  }, [])

  if (view === "#dashboard") return <DashboardPage />
  if (view === "#login") return <LoginPage />
  const page = view.slice(1) as PageName
  if (["learn", "stories", "week", "progress", "help", "settings"].includes(page)) return <OtherPages page={page} />
  return <LandingPage />
}

export default App
