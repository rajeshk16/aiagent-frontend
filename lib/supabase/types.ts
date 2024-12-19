export interface Project {
  id: string
  name: string
  description: string
  phase: 'planning' | 'development' | 'testing' | 'production'
  created_at: string
}

export interface TeamMember {
  id: string
  name: string
  email: string
  avatar_url?: string
}

export interface ProjectMember {
  project_id: string
  member_id: string
  team_member: TeamMember
}

export interface DataSource {
  id: string
  project_id: string
  type: 'postgresql' | 'mysql' | 'oracle' | 'salesforce' | 'api' | 's3'
  config: Record<string, any>
  created_at: string
}

