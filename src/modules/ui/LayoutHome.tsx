import { Navbar } from "@/components/Navbar"
import { Sidebar } from "@/components/sidebar"

interface LayoutProps {
  children:React.ReactNode
}



export function LayoutHome({children}:LayoutProps) {
  return (
    <div>
        <Navbar />
        <Sidebar />
        {children}
        </div>
  )
}

 