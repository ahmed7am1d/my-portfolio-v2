import {defineField, defineType} from 'sanity'

export const experience = defineType({
    name: 'experience',
    title: 'Experience',
    type: 'document',
    fields: [
        defineField({name: 'title', title: 'Title', type: 'string'}),
        defineField({name: 'company', title: 'Company', type: 'string'}),
        defineField({name: 'location', title: 'Location', type: 'string'}),
        defineField({name: 'startDate', title: 'Start Date', type: 'date'}),
        defineField({name: 'endDate', title: 'End Date', type: 'date'}),
        defineField({name: 'description', title: 'Description', type: 'text'}),
        defineField({name: 'url', title: 'URL', type: 'url'}),
    ]
})