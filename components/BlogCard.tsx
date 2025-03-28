// components/BlogCard.tsx
import Image from "next/image";
import { CalendarIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

interface BlogCardProps {
  title: string;
  description?: string;
  date: string;
  thumbnail?: string;
  slug: string;
  category: string;
}

export default function BlogCard({
  title,
  description = "No description available.",
  date,
  thumbnail = "/images/placeholder-image.jpg?height=200&width=300",
  slug,
  category,
}: BlogCardProps) {
  return (
    <Card className="overflow-hidden border-0 shadow-sm hover:shadow-md transition-shadow">
      <CardContent className="p-0">
        <Link href={slug} className="block group">
          <div className="flex flex-col md:flex-row">
            <div className="relative h-48 w-full md:h-auto md:w-1/3">
              <Image
                src={thumbnail}
                alt={`${title} thumbnail`}
                fill
                className="object-cover transition-transform group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="flex flex-1 flex-col justify-between p-4 md:p-6">
              <div className="space-y-2">
                <h3 className="line-clamp-2 text-xl font-semibold tracking-tight md:text-2xl text-foreground group-hover:text-primary transition-colors">
                  {title}
                </h3>
                <p className="line-clamp-3 text-muted-foreground">
                  {description}
                </p>
              </div>
              <div className="mt-4 flex items-center justify-between text-sm text-muted-foreground">
                <div className="flex items-center">
                  <CalendarIcon className="mr-1 h-4 w-4 text-accent" />
                  <time dateTime={date}>
                    {new Date(date).toLocaleDateString()}
                  </time>
                </div>
                <span className="rounded-full bg-secondary px-2 py-1 text-xs capitalize text-secondary-foreground">
                  {category}
                </span>
              </div>
            </div>
          </div>
        </Link>
      </CardContent>
    </Card>
  );
}
