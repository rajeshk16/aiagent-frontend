import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface EmptyStateProps {
  title: string
  description: string
  action: {
    label: string
    href: string
  }
}

export function EmptyState({ title, description, action }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16">
      <div className="mb-8 relative w-48 h-48">
        <Image
          src="/placeholder.svg"
          alt=""
          fill
          className="object-contain"
        />
      </div>
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-slate-600 mb-8">{description}</p>
      <Button asChild size="lg">
        <Link href={action.href}>
          {action.label}
        </Link>
      </Button>
    </div>
  )
}

