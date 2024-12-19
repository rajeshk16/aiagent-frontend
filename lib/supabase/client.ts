import { createClient } from '@supabase/supabase-js'
import { Database } from './database.types'

const supabaseUrl = 'https://ncfniefgarsjoazlhqoc.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5jZm5pZWZnYXJzam9hemxocW9jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQyNzkxODEsImV4cCI6MjA0OTg1NTE4MX0.BbSU-Avf5PvU_7SGKuCeml_g--t1KR1Cct96_i6MVHg'

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey)

