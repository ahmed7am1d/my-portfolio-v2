import {defineField, defineType} from 'sanity'


export const blog = defineType({
    name: 'blog',
    title: 'Blog',
    type: 'document',
    fields: [
        // Title
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: Rule => Rule.required()
        }),

        // Slug
        /**
         * The slug is used in my website URLs (like /blog/my-first-post).
         * Sanity's slug type automatically creates URL-friendly versions of blog's titles.
         */
        defineField({
            name: 'slug',
            title: 'Slug',
            type:  'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: Rule => Rule.required()
        }),

        // Published At
        defineField({
            name: 'publishedAt',
            title: 'Published At',
            type: 'datetime',
            validation: Rule => Rule.required()
        }),

        // Excerpt (Short description appears on card of the blog)
        defineField({
            name: 'excerpt',
            title: 'Excerpt',
            description: 'Short summary that appears on blog cards',
            type: 'text',
            rows: 3,
            validation: Rule => Rule.required().max(200)
        }),

        // Reading time
        defineField({
            name: 'readingTime',
            title: 'Reading Time (minutes)',
            type: 'number',
            validation: Rule => Rule.required().positive().integer()
        }),

        // Main content using Portable text for rich editing
        defineField({
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [
                // Block
                {
                    type: 'block',
                    styles: [
                        {title: 'Normal', value: 'normal'},
                        {title: 'H2', value: 'h2'},
                        {title: 'H3', value: 'h3'},
                        {title: 'H4', value: 'h4'},
                        {title: 'Quote', value: 'blockquote'},
                    ], 
                    marks: {
                        decorators: [
                            {title: 'Strong', value: 'strong'},
                            {title: 'Emphasis', value: 'em'},
                            {title: 'Code', value: 'code'}
                        ],
                        annotations: [
                            {
                                name: 'link',
                                type: 'object',
                                title: 'Link',
                                fields: [
                                    {
                                        name: 'href',
                                        type: 'url',
                                        title: 'URL'
                                    },
                                    {
                                        name: 'blank',
                                        type: 'boolean',
                                        title: 'Open in new tab',
                                        initialValue: true,
                                    }
                                ]

                            }
                        ]
                    }
                },
                // Image (Add images within the content)
                {
                    type: 'image',
                    options: {
                        hotspot: true,
                    },
                    fields: [
                        {
                            name: 'alt',
                            type: 'string',
                            title: 'Alternative text',
                            description: 'Important for SEO and accessibility',
                            validation: Rule => Rule.required(),
                        },
                        {
                            name: 'caption',
                            type: 'string',
                            title: 'Caption'
                        }, 
                        
                    ]
                },
                // Code block
                {
                    type: 'code',
                    options: {
                        withFilename: true,
                    },
                }
            ],
            validation: Rule => Rule.required(),
        }),

        // Featured image (for cards and headers)
        defineField({
            name: 'mainImage',
            title: 'Main image',
            type: 'image',
            options: {
                hotspot: true,
            },
            fields: [
                {
                name: 'alt',
                type: 'string',
                title: 'Alternative text',
                description: 'Important for SEO and accessibility',
                validation: Rule => Rule.required(),
                },
            ],
            validation: Rule => Rule.required(),
        }),

        // Categories for blog organization
        defineField({
            name: 'categories',
            title: 'Categories',
            type: 'array',
            of: [{type: 'reference', to: {type: 'category'}}],
        }),

        // SEO fields
        defineField({
            name: 'seo',
            title: 'SEO',
            type: 'object',
            fields: [
                {
                    name: 'metaTitle',
                    title: 'Meta Title',
                    type: 'string',
                },
                {
                    name: 'metaDescription',
                    title: 'Meta Description',
                    type: 'text',
                    rows: 3,
                    validation: Rule => Rule.max(160),
                },
                {
                    name: 'shareImage',
                    title: 'Share Image',
                    type: 'image',
                    description: 'Image for social media sharing (1200x630px ideal)',
                },
            ],
        }),
    ],
      preview: {
        select: {
            title: 'title',
            media: 'mainImage',
            publishedAt: 'publishedAt',
        },
        prepare(selection) {
        const {publishedAt} = selection
        const date = publishedAt ? new Date(publishedAt).toLocaleDateString() : 'Unpublished'
        return {
            ...selection,
            subtitle: date,
        }
    }},
})