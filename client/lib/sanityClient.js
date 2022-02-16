import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: process.env.local.SANITY_CLIENT_PROJECTID,
  dataset: process.env.local.SANITY_CLIENT_DATASET,
  apiVersion: 'v1',
  token: process.env.local.SANITY_CLIENT_TOKEN,
  useCdn: false,
})  