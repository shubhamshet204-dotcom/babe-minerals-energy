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
      products: {
        Row: {
          id: string
          name: string
          brand: string
          brand_slug: string
          category_slug: string
          image: string
          image_alt: string
          size: string
          description: string
          batch: string
          grade: string
          price: string
          price_value: number
          moq: string | null
          bis_code: string | null
          is_featured: boolean
          display_order: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          brand: string
          brand_slug: string
          category_slug: string
          image?: string
          image_alt?: string
          size: string
          description?: string
          batch?: string
          grade?: string
          price: string
          price_value: number
          moq?: string | null
          bis_code?: string | null
          is_featured?: boolean
          display_order?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          brand?: string
          brand_slug?: string
          category_slug?: string
          image?: string
          image_alt?: string
          size?: string
          description?: string
          batch?: string
          grade?: string
          price?: string
          price_value?: number
          moq?: string | null
          bis_code?: string | null
          is_featured?: boolean
          display_order?: number
          updated_at?: string
        }
      }
      quote_requests: {
        Row: {
          id: number
          name: string
          email: string
          phone: string
          company: string
          requirement: string
          delivery_location: string | null
          created_at: string
        }
        Insert: {
          id?: number
          name: string
          email: string
          phone?: string
          company: string
          requirement: string
          delivery_location?: string | null
          created_at?: string
        }
        Update: {
          name?: string
          email?: string
          phone?: string
          company?: string
          requirement?: string
          delivery_location?: string | null
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
