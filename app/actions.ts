'use server'

import { supabase } from '@/lib/supabase/client'
import { revalidatePath } from 'next/cache'
import { z } from 'zod'

const projectSchema = z.object({
  name: z.string().min(1, "Project name is required"),
  description: z.string(),
  phase: z.enum(["planning", "development", "testing", "production"]),
  selectedAgents: z.array(z.string()),
  teamMembers: z.array(z.object({
    id: z.string(),
    name: z.string(),
    email: z.string().email()
  })),
  dataSources: z.array(z.string())
})

export async function createProject(formData: FormData) {
  try {
    const parsed = projectSchema.parse({
      name: formData.get('name'),
      description: formData.get('description'),
      phase: formData.get('phase'),
      selectedAgents: JSON.parse(formData.get('selectedAgents') as string),
      teamMembers: JSON.parse(formData.get('teamMembers') as string),
      dataSources: JSON.parse(formData.get('dataSources') as string)
    })

    // Create project
    const { data: project, error: projectError } = await supabase
      .from('projects')
      .insert({
        name: parsed.name,
        description: parsed.description,
        phase: parsed.phase
      })
      .select()
      .single()

    if (projectError) throw projectError

    // Add agents to project
    if (parsed.selectedAgents.length > 0) {
      const { error: agentsError } = await supabase
        .from('project_agents')
        .insert(
          parsed.selectedAgents.map(agentId => ({
            project_id: project.id,
            agent_id: agentId
          }))
        )

      if (agentsError) throw agentsError
    }

    // Add team members to project
    if (parsed.teamMembers.length > 0) {
      const { error: membersError } = await supabase
        .from('project_members')
        .insert(
          parsed.teamMembers.map(member => ({
            project_id: project.id,
            member_id: member.id
          }))
        )

      if (membersError) throw membersError
    }

    // Add data sources to project
    if (parsed.dataSources.length > 0) {
      const { error: sourcesError } = await supabase
        .from('data_sources')
        .insert(
          parsed.dataSources.map(sourceId => ({
            project_id: project.id,
            type: sourceId,
            config: {} // You may want to add more configuration based on the source type
          }))
        )

      if (sourcesError) throw sourcesError
    }

    revalidatePath('/projects')
    return { success: true, project }

  } catch (error) {
    console.error('Error creating project:', error)
    if (error instanceof Error) {
      return { success: false, error: error.message }
    }
    return { success: false, error: 'An unknown error occurred' }
  }
}

export async function uploadProjectFile(projectId: string, file: File) {
  try {
    const fileName = `${projectId}/${Date.now()}-${file.name}`
    
    const { error: uploadError, data } = await supabase
      .storage
      .from('project-files')
      .upload(fileName, file)

    if (uploadError) throw uploadError

    const { data: { publicUrl } } = supabase
      .storage
      .from('project-files')
      .getPublicUrl(fileName)

    const { error: fileError } = await supabase
      .from('project_files')
      .insert({
        project_id: projectId,
        name: file.name,
        size: file.size,
        type: file.type,
        url: publicUrl
      })

    if (fileError) throw fileError

    return { success: true, url: publicUrl }
  } catch (error) {
    console.error('Error uploading file:', error)
    return { success: false, error: 'Failed to upload file' }
  }
}

export async function searchTeamMembers(query: string) {
  try {
    const { data, error } = await supabase
      .from('team_members')
      .select()
      .ilike('name', `%${query}%`)
      .limit(5)

    if (error) {
      console.error('Error searching team members:', error)
      return []
    }

    return data || []
  } catch (error) {
    console.error('Error searching team members:', error)
    return []
  }
}

export async function getAgents() {
  const { data, error } = await supabase
    .from('agents')
    .select()

  if (error) {
    console.error('Error fetching agents:', error)
    return []
  }

  return data
}

