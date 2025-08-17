import type { Blog, internalGroqTypeReferenceTo, SanityImageCrop, SanityImageHotspot } from '~/libs/App/types/sanity.types'

/**
 * Represents a locale version reference for multilingual content
 * Used for language switching and navigation between translated versions
 */
export type LocaleVersion = {
  /** Language code (e.g., 'en-US', 'ar-IQ') */
  language: string
  /** URL-safe slug for this language version */
  slug: string
  /** Shared identifier linking all language versions of the same content */
  sharedId: string
}

/**
 * Extended image asset with resolved URL and expanded metadata
 * Extends Sanity's base image type with additional fields needed for rendering
 */
export type BlogImageAsset = {
  asset?: {
    _ref: string
    _type: 'reference'
    url?: string
    _weak?: boolean
    [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
  }
  hotspot?: SanityImageHotspot
  crop?: SanityImageCrop
  alt?: string
  _type: 'image'
}

/**
 * Blog content with enhanced image assets and resolved references
 * Extends the base Sanity blog type with expanded asset data
 */
export type BlogWithEnhancedAssets = {
  /** Main blog image with resolved URLs and metadata */
  mainImage?: BlogImageAsset
} & Omit<Blog, 'mainImage'>
