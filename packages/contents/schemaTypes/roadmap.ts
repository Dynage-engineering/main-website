import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'roadmap',
  title: 'Roadmap Innovation',
  type: 'document',
  fields: [
    defineField({
      name: 'projectName',
      title: 'Project Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'projectName',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'niche',
      title: 'Niche',
      type: 'string',
      description: 'e.g. AI, Robotics, IoT',
    }),
    defineField({
      name: 'industry',
      title: 'Industry',
      type: 'string',
      description: 'e.g. Health, Finance, Real Estate',
    }),
    defineField({
      name: 'dateStart',
      title: 'Start Date',
      type: 'date',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'dateEnd',
      title: 'End Date / Targeted Completion',
      type: 'date',
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Planned', value: 'planned' },
          { title: 'In Progress', value: 'in-progress' },
          { title: 'Completed', value: 'completed' },
        ],
      },
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'blockContent',
    }),
  ],
  preview: {
    select: {
      title: 'projectName',
      subtitle: 'niche',
    },
  },
})
