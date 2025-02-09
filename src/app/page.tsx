import { Navbar } from "@/components/Navbar"
import { Sidebar } from "@/components/sidebar"
import { VideoCard } from "@/components/video-card"

const videos = [
  {
    title: "Building a Modern Web Application",
    channel: "Code Masters",
    views: "120K",
    timestamp: "2 days ago",
    thumbnail: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Learn TypeScript in 2024",
    channel: "Dev Tips",
    views: "50K",
    timestamp: "1 week ago",
    thumbnail: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Next.js App Router Deep Dive",
    channel: "Web Wizards",
    views: "75K",
    timestamp: "3 days ago",
    thumbnail: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "UI Design Fundamentals",
    channel: "Design Hub",
    views: "200K",
    timestamp: "5 days ago",
    thumbnail: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "React Server Components Explained",
    channel: "React Masters",
    views: "150K",
    timestamp: "1 day ago",
    thumbnail: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Building a YouTube Clone",
    channel: "Code Masters",
    views: "80K",
    timestamp: "4 days ago",
    thumbnail: "/placeholder.svg?height=200&width=300",
  },
]

export default function Home() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <main className="min-h-screen pl-56 pt-16">
        <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {videos.map((video) => (
            <VideoCard key={video.title} {...video} />
          ))}
        </div>
      </main>
    </>
  )
}

