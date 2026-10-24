import { Outlet } from "react-router-dom"
import { KidSidebar } from "../components/kids/KidSidebar"
import { KidTopBar } from "../components/kids/KidTopBar"
import "../styles/kid-shell.css"

export function KidLayout() {
    return (
        <div className="kid-layout">
            <KidSidebar />
            <div className="kid-layout__main">
                <KidTopBar />

                <div className="kid-layout__content">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}