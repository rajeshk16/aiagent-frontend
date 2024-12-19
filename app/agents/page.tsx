"use client"

import { useState } from "react"
import { Layout } from "@/components/layout"
import { AgentCard } from "@/components/agent-card"
import { Input } from "@/components/ui/input"

const agents = [
  {
    id: "profile-ai",
    name: "Profile AI",
    description: "Add description here description description here heredescription hered escription here",
    image: "/placeholder.svg",
    isOnline: true,
  },
  {
    id: "map-ai",
    name: "Map AI",
    description: "Add description here description description here heredescription hered escription here",
    image: "/placeholder.svg",
    isOnline: true,
  },
  {
    id: 3,
    name: "Quality AI",
    description: "Add description here description description here heredescription hered escription here",
    image: "/placeholder.svg",
    isOnline: true,
  },
  {
    id: 4,
    name: "Discovery AI",
    description: "Add description here description description here heredescription hered escription here",
    image: "/placeholder.svg",
    isOnline: false,
  },
  {
    id: 5,
    name: "Metadata AI",
    description: "Add description here description description here heredescription hered escription here",
    image: "/placeholder.svg",
    isOnline: true,
  },
  {
    id: 6,
    name: "Reconcile AI",
    description: "Add description here description description here heredescription hered escription here",
    image: "/placeholder.svg",
    isOnline: false,
  },
  {
    id: 7,
    name: "Transform AI",
    description: "Add description here description description here heredescription hered escription here",
    image: "/placeholder.svg",
    isOnline: false,
  },
  {
    id: 8,
    name: "Cleanse AI",
    description: "Add description here description description here heredescription hered escription here",
    image: "/placeholder.svg",
    isOnline: false,
  },
  {
    id: 9,
    name: "Validate AI",
    description: "Add description here description description here heredescription hered escription here",
    image: "/placeholder.svg",
    isOnline: false,
  },
]

export default function AgentCatalog() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredAgents = agents.filter(agent =>
    agent.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-semibold mb-1">Explore All Agents</h1>
          <p className="text-slate-600">
            Discover a comprehensive list of AI agents
          </p>
        </div>

        <div className="mb-8">
          <Input
            type="search"
            placeholder="Search for agents"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="max-w-md"
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredAgents.map((agent) => (
            <AgentCard
              key={agent.id}
              id={agent.id}
              name={agent.name}
              description={agent.description}
              image={agent.image}
              isOnline={agent.isOnline}
            />
          ))}
        </div>
      </div>
    </Layout>
  )
}

