import { ProjectCard } from 'components/project-card/ProjectCard'
import type { Metadata } from 'next'
import { getCategory } from 'utils/prismic'

export const revalidate = 60

export const generateMetadata = async ({
  params,
}: PageProps<'/category/[category]'>): Promise<Metadata> => {
  const category = (await params).category
  const { data } = await getCategory(category)

  return {
    title: data.meta_title,
  }
}

const Index = async ({ params }: PageProps<'/category/[category]'>) => {
  const category = (await params).category
  const { data } = await getCategory(category)

  return (
    <div className="space-y-2">
      {data.projects.map(({ project }, i) => {
        return (
          <ProjectCard
            href={`/projects/${project.uid}`}
            key={project.uid}
            project={project.data}
            preview={project.data.preview}
          />
        )
      })}
    </div>
  )
}

export default Index
