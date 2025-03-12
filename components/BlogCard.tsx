// components/BlogCard.tsx
import Image from "next/image";
import { CalendarIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link"; // Import Link for Next.js routing

interface BlogCardProps {
  title: string;
  description?: string; // Optional since not all posts may have it
  date: string;
  thumbnail?: string; // Matches Contentlayer field name
  slug: string;
}

export default function BlogCard({
  title,
  description = "No description available.", // Fallback if undefined
  date,
  thumbnail = "/placeholder.svg?height=200&width=300", // Default placeholder
  slug,
}: BlogCardProps) {
  return (
    <Card className="overflow-hidden border-0 shadow-sm">
      <CardContent className="p-0">
        <Link href={slug} className="block">
          <div className="flex flex-col md:flex-row">
            <div className="relative h-48 w-full md:h-auto md:w-1/3">
              <Image
                src={thumbnail} // Uses Contentlayer thumbnail or fallback
                alt={`${title} thumbnail`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="flex flex-1 flex-col justify-between p-4 md:p-6">
              <div className="space-y-2">
                <h3 className="line-clamp-2 text-xl font-semibold tracking-tight md:text-2xl">
                  {title}
                </h3>
                <p className="line-clamp-3 text-muted-foreground">
                  {description}
                </p>
              </div>
              <div className="mt-4 flex items-center text-sm text-muted-foreground">
                <CalendarIcon className="mr-1 h-4 w-4" />
                <time dateTime={date}>
                  {new Date(date).toLocaleDateString()}
                </time>
              </div>
            </div>
          </div>
        </Link>
      </CardContent>
    </Card>
  );
}
