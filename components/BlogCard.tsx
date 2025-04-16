import Image from "next/image"
import Link from "next/link"
import { CalendarIcon, Clock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export interface BlogCardProps {
  title: string
  description?: string
  date: string
  thumbnail?: string
  slug: string
  category: string
  readTime: string
}

export default function BlogCard({
  title,
  description = "No description available.",
  date,
  thumbnail = "/images/placeholder-image.jpg?height=200&width=300",
  slug,
  category,
  readTime,
}: BlogCardProps) {
  return (
    <Link href={`/blog/${slug}`} className="block no-underline">
      <Card className="overflow-hidden transition-all duration-200 hover:shadow-md">
        <div className="flex flex-col md:flex-row">
          <div className="relative h-48 w-full md:h-auto md:w-1/3">
            <Image
              src={thumbnail || "/placeholder.svg"}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <CardContent className="flex flex-1 flex-col justify-between p-4 md:p-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="text-xs font-medium">
                  {category}
                </Badge>
              </div>
              <h3 className="line-clamp-2 text-xl font-bold tracking-tight md:text-2xl">{title}</h3>
              <p className="line-clamp-2 text-sm text-muted-foreground md:line-clamp-3">{description}</p>
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <CalendarIcon className="h-4 w-4" />
                <span>{date}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{readTime}</span>
              </div>
            </div>
          </CardContent>
        </div>
      </Card>
    </Link>
  )
}
