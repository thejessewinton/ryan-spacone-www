import type {
  CategoryDocument,
  HomeDocument,
  StillsSetDocument,
  ProjectDocument,
  StillsDocument,
} from '../../prismicio-types'
import { cache } from 'react'
import { createClient } from 'prismicio'
import { notFound } from 'next/navigation'

const client = createClient()

interface ProjectNavItem {
  project: { url: string; uid: string }
}

interface StillsNavItem {
  set: { url: string; uid: string }
}

export const getSiteSettings = cache(async () => {
  return await client.getSingle('site_settings')
})

export const getHomePage = cache(async () => {
  return await client.getSingle<
    HomeDocument & {
      data: {
        projects: { project: ProjectDocument }[]
      }
    }
  >('home', {
    fetchLinks: [
      'project.title',
      'project.client',
      'project.cover',
      'project.uid',
      'project.preview',
    ],
  })
})

export const getAboutPage = cache(async () => {
  return await client.getSingle('about')
})

export type AboutPage = Awaited<ReturnType<typeof getAboutPage>>

export const getProjects = cache(async () => {
  return await client.getByType('project')
})

export const getCategory = cache(async (category: string) => {
  return await client.getByUID<
    CategoryDocument & {
      data: {
        projects: { project: ProjectDocument }[]
      }
    }
  >('category', category, {
    fetchLinks: [
      'project.title',
      'project.client',
      'project.cover',
      'project.uid',
      'project.preview',
    ],
  })
})

export const getProject = cache(async (uid: string) => {
  try {
    const project = await client.getByUID<
      ProjectDocument & {
        data: {
          category: CategoryDocument
        }
      }
    >('project', uid, {
      fetchLinks: ['category.uid'],
    })

    const categoryUid = project.data.category.uid

    const allProjectsInCategory = await client.getByUID('category', categoryUid)
    const projects = allProjectsInCategory.data
      .projects as unknown as ProjectNavItem[]

    const currentProject = projects.findIndex(
      (project) => project.project.uid === uid,
    )

    const firstProject = projects[0]?.project.url
    const previousProject = projects[currentProject - 1]?.project.url as string
    const nextProject = projects[currentProject + 1]?.project.url as string

    return {
      project,
      firstProject,
      previousProject,
      nextProject,
    }
  } catch (error) {
    return notFound()
  }
})

export const getStillsPage = cache(async () => {
  try {
    return await client.getSingle<
      StillsDocument & {
        data: {
          sets: { set: StillsSetDocument }[]
        }
      }
    >('stills', {
      fetchLinks: [
        'stills_set.title',
        'stills_set.cover',
        'stills_setstills_set.uid',
        'stills_set.preview',
      ],
    })
  } catch (error) {
    return notFound()
  }
})

export const getStillsSet = cache(async (uid: string) => {
  try {
    const stillsSet = await client.getByUID('stills_set', uid)

    const allStillsSets = await getStillsPage()
    const sets = allStillsSets.data.sets as unknown as StillsNavItem[]
    const currentSet = sets.findIndex((set) => set.set.uid === uid)

    const firstSet = sets[0]?.set.url as string
    const previousSet = sets[currentSet - 1]?.set.url as string
    const nextSet = sets[currentSet + 1]?.set.url as string

    return {
      firstSet,
      stillsSet,
      previousSet,
      nextSet,
    }
  } catch (error) {
    return notFound()
  }
})
