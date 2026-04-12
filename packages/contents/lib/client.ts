import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: '8ajn3uhd',
  dataset: 'production',
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: '2024-03-11', // use current date (YYYY-MM-DD) to target the latest API version
})

export const PLACEHOLDER_IMG = "https://placehold.co/800"