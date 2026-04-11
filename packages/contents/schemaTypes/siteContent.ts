import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'siteContent',
  title: 'Website Content',
  type: 'document',
  fields: [
    defineField({
      name: 'page',
      title: 'Page Name',
      type: 'string',
    }),
    defineField({
      name: 'section',
      title: 'Section Name',
      type: 'string',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'content',
      title: 'Rich Content',
      type: 'blockContent',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
    }),
  ],
})
