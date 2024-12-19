import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://spjnitvzxhohqubsykoq.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNwam5pdHZ6eGhvaHF1YnN5a29xIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQwODc1NTYsImV4cCI6MjA0OTY2MzU1Nn0.szJf8LkgBr2wxGDt7sT6jOIZlo0Q6SXczp4FHxe9exQ'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

