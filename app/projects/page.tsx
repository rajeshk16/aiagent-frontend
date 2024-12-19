import { Layout } from "@/components/layout"
import { ProjectCard } from "@/components/project-card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const projects = [
  {
    id: "1",
    title: "Project 1",
    description: "Add a description here Add a description hereAdd a description hereAdd",
    badges: [
      { label: "VH", color: "#4299E1" }, // Blue
      { label: "AG", color: "#ED8936" }, // Orange
    ],
  },
  {
    id: "2",
    title: "Project 2",
    description: "Add a description here Add a description hereAdd a description hereAdd",
    badges: [
      { label: "VH", color: "#48BB78" }, // Green
      { label: "AG", color: "#F56565" }, // Red
    ],
  },
  {
    id: "3",
    title: "Project 3",
    description: "Add a description here Add a description hereAdd a description hereAdd",
    badges: [
      { label: "VH", color: "#38B2AC" }, // Teal
      { label: "AG", color: "#ED64A6" }, // Pink
    ],
  },
]

export default function Projects() {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-semibold mb-1">My Projects</h1>
            <p className="text-slate-600">
              This helps our team review your application quickly. This
            </p>
          </div>
          <Button asChild>
            <Link href="/projects/create">
              Create New Project
            </Link>
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              title={project.title}
              description={project.description}
              badges={project.badges}
            />
          ))}
        </div>
      </div>
    </Layout>
  )
}

