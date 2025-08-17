import type { BlogWithEnhancedAssets, LocaleVersion } from '~/libs/Blogs/types/domain.types'

/**
 * Response structure for the blog detail page GROQ query
 * Contains both the main blog content and locale navigation data
 */
export type BlogDetailQueryResponse = {
  /** The main blog content for the current language */
  blog: BlogWithEnhancedAssets
  /** All available language versions for navigation */
  localeVersions: LocaleVersion[]
}
