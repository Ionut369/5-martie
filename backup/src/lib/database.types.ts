export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      newsletter_subscriptions: {
        Row: {
          id: string
          email: string
          created_at: string
          status: string
          ip_address: string | null
        }
        Insert: {
          id?: string
          email: string
          created_at?: string
          status?: string
          ip_address?: string | null
        }
        Update: {
          id?: string
          email?: string
          created_at?: string
          status?: string
          ip_address?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}