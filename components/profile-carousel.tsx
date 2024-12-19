"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, MoreVertical } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface Profile {
  id: number
  name: string
  image: string
  description: string
}

const profiles: Profile[] = [
  {
    id: 1,
    name: "Profile AI",
    image: "/placeholder.svg",
    description: "Analyzes source data to provide statistical information and identify patterns, anomalies, and data quality issues."
  },
  {
    id: 2,
    name: "Profile AI",
    image: "/placeholder.svg",
    description: "Analyzes source data to provide statistical information and identify patterns, anomalies, and data quality issues."
  },
  {
    id: 3,
    name: "Profile AI",
    image: "/placeholder.svg",
    description: "Analyzes source data to provide statistical information and identify patterns, anomalies, and data quality issues."
  }
]

export function ProfileCarousel() {
  const [activeIndex, setActiveIndex] = useState(1)

  const handlePrevious = () => {
    setActiveIndex((current) => (current === 0 ? profiles.length - 1 : current - 1))
  }

  const handleNext = () => {
    setActiveIndex((current) => (current === profiles.length - 1 ? 0 : current + 1))
  }

  return (
    <div className="relative w-full max-w-5xl mx-auto px-12 py-8">
      <div className="relative h-[300px] overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          {profiles.map((profile, index) => (
            <div
              key={profile.id}
              className={cn(
                "absolute w-[400px] p-6 bg-white rounded-xl shadow-lg transition-all duration-500 ease-in-out",
                {
                  "z-20 scale-100 opacity-100": index === activeIndex,
                  "z-10 -translate-x-[120%] scale-90 opacity-60": 
                    index === (activeIndex === 0 ? profiles.length - 1 : activeIndex - 1),
                  "z-10 translate-x-[120%] scale-90 opacity-60":
                    index === (activeIndex === profiles.length - 1 ? 0 : activeIndex + 1),
                  "opacity-0": 
                    index !== activeIndex && 
                    index !== (activeIndex === 0 ? profiles.length - 1 : activeIndex - 1) &&
                    index !== (activeIndex === profiles.length - 1 ? 0 : activeIndex + 1),
                }
              )}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <img
                    src={profile.image}
                    alt={profile.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <h3 className="text-lg font-semibold">{profile.name}</h3>
                </div>
                <Button variant="ghost" size="icon">
                  <MoreVertical className="h-5 w-5" />
                </Button>
              </div>
              <p className="text-slate-600">{profile.description}</p>
            </div>
          ))}
        </div>
      </div>

      <Button
        variant="ghost"
        size="icon"
        className="absolute left-0 top-1/2 -translate-y-1/2"
        onClick={handlePrevious}
      >
        <ChevronLeft className="h-8 w-8" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-0 top-1/2 -translate-y-1/2"
        onClick={handleNext}
      >
        <ChevronRight className="h-8 w-8" />
      </Button>
    </div>
  )
}

