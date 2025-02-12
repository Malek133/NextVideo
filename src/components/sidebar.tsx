"use client"

import {
  Clock,
  Film,
  Flame,
  Gamepad2,
  History,
  Home,
  Library,
  Lightbulb,
  ListVideo,
  Music2,
  Newspaper,
  PlaySquare,
  Radio,
  Shirt,
  ShoppingBag,
  Trophy,
} from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

const mainNavItems = [
  {
    title: "Home",
    icon: Home,
    href: "/",
  },
  {
    title: "Trending",
    icon: Flame,
    href: "/trending",
  },
  {
    title: "feed",
    icon: ListVideo,
    href: "/feed",
  },
  {
    title: "Subscriptions",
    icon: ListVideo,
    href: "/Subscriptions",
  },
]

const secondaryNavItems = [
  {
    title: "Library",
    icon: Library,
    href: "/library",
  },
  {
    title: "History",
    icon: History,
    href: "/history",
  },
  {
    title: "Your Videos",
    icon: PlaySquare,
    href: "/your-videos",
  },
  {
    title: "Watch Later",
    icon: Clock,
    href: "/playlist?list=WL",
  },
]

const subscriptions = [
  {
    title: "Music",
    icon: Music2,
    href: "/music",
  },
  {
    title: "Gaming",
    icon: Gamepad2,
    href: "/gaming",
  },
  {
    title: "Sports",
    icon: Trophy,
    href: "/sports",
  },
  {
    title: "News",
    icon: Newspaper,
    href: "/news",
  },
]

const explore = [
  {
    title: "Movies & TV",
    icon: Film,
    href: "/movies-tv",
  },
  {
    title: "Live",
    icon: Radio,
    href: "/live",
  },
  {
    title: "Fashion & Beauty",
    icon: Shirt,
    href: "/fashion-beauty",
  },
  {
    title: "Learning",
    icon: Lightbulb,
    href: "/learning",
  },
  {
    title: "Shopping",
    icon: ShoppingBag,
    href: "/shopping",
  },
]

export function Sidebar() {
  return (
    <aside className="fixed left-0 top-16 z-40 h-[calc(100vh-4rem)] w-56 border-r bg-background">
      <ScrollArea className="h-full py-2">
        <nav className="flex flex-col gap-2 px-2">
          {mainNavItems.map((item) => (
            <Button key={item.title} variant="ghost" className="justify-start gap-2" asChild>
              <Link href={item.href}>
                <item.icon className="h-4 w-4" />
                {item.title}
              </Link>
            </Button>
          ))}
        </nav>
        <Separator className="my-2" />
        <nav className="flex flex-col gap-2 px-2">
          {secondaryNavItems.map((item) => (
            <Button key={item.title} variant="ghost" className="justify-start gap-2" asChild>
              <Link href={item.href}>
                <item.icon className="h-4 w-4" />
                {item.title}
              </Link>
            </Button>
          ))}
        </nav>
        <Separator className="my-2" />
        <div className="px-4 py-2">
          <h2 className="mb-2 text-sm font-semibold">Subscriptions</h2>
          <nav className="flex flex-col gap-2">
            {subscriptions.map((item) => (
              <Button key={item.title} variant="ghost" className="justify-start gap-2" asChild>
                <Link href={item.href}>
                  <item.icon className="h-4 w-4" />
                  {item.title}
                </Link>
              </Button>
            ))}
          </nav>
        </div>
        <Separator className="my-2" />
        <div className="px-4 py-2">
          <h2 className="mb-2 text-sm font-semibold">Explore</h2>
          <nav className="flex flex-col gap-2">
            {explore.map((item) => (
              <Button key={item.title} variant="ghost" className="justify-start gap-2" asChild>
                <Link href={item.href}>
                  <item.icon className="h-4 w-4" />
                  {item.title}
                </Link>
              </Button>
            ))}
          </nav>
        </div>
      </ScrollArea>
    </aside>
  )
}

