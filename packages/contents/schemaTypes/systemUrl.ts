import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'systemUrl',
  title: 'System URL',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'System Name',
      type: 'string',
      description: 'e.g. Dashboard, Academy, Studio',
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'url',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Core App', value: 'core'},
          {title: 'Internal Tool', value: 'internal'},
          {title: 'External Resource', value: 'external'},
        ]
      }
    }),
    defineField({
        name: 'description',
        title: 'Description',
        type: 'text',
    }),
  ],
})
