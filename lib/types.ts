export interface Project {
  id: string
  name: string
  description: string
  phase: 'planning' | 'development' | 'testing' | 'production'
  created_at: string
  updated_at: string
}

export interface Agent {
  id: string
  name: string
  description: string
  avatar: string
}

export interface TeamMember {
  id: string
  name: string
  email: string
  avatar?: string
}

export interface ProjectAgent {
  project_id: string
  agent_id: string
}

export interface ProjectMember {
  project_id: string
  member_id: string
}

export interface DataSource {
  id: string
  project_id: string
  type: 'file' | 's3' | 'postgresql' | 'mysql' | 'oracle' | 'salesforce' | 'api'
  config: Record<string, any>
}

