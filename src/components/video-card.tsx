import { Card, CardContent } from "@/components/ui/card"
 import Image from 'next/image'

interface VideoCardProps {
  title: string
  channel: string
  views: string
  timestamp: string
  thumbnail: string
}

export function VideoCard({ title, channel, views, timestamp,thumbnail }: VideoCardProps) {
  return (
    <Card className="border-0 shadow-none">
      <CardContent className="p-0">
         <div className="aspect-video overflow-hidden rounded-lg">
          <Image src={thumbnail || "/placeholder.svg"} alt={'nextvideo'} fill className="object-cover " />
        </div> 
        <div className="pt-2">
          <h3 className="font-semibold leading-tight">{title}</h3>
          <p className="text-sm text-muted-foreground">{channel}</p>
          <p className="text-sm text-muted-foreground">
            {views} views • {timestamp}
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

