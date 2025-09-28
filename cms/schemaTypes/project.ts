import { defineField, defineType } from 'sanity'

export const project = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Project Name',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Project Description',
      type: 'text',
    }),
    defineField({
      name: 'image',
      title: 'Project Image',
      type: 'image',
      options: {
        hotspot: true, // Enables the hotspot functionality for better image cropping
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          description: 'Important for SEO and accessibility. Describe what the image shows.',
          validation: Rule => Rule.required().min(10).max(125).warning('Alt text should be between 10-125 characters for best SEO results'),
        }),
      ]
    }),
    defineField({
      name: 'projectLink',
      title: 'Project Link',
      type: 'url',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers will display first',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
  },
})