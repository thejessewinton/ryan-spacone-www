import { StillsCard } from 'components/stills-card/StillsCard'
import type { Metadata } from 'next'
import { getStillsPage } from 'utils/prismic'

export const revalidate = 60

export const generateMetadata = async (): Promise<Metadata> => {
  const { data } = await getStillsPage()

  return {
    title: data.meta_title,
  }
}

const Index = async () => {
  const { data } = await getStillsPage()

  return (
    <div className="space-y-2">
      {data.sets.map(({ set }) => {
        return (
          <StillsCard
            key={set.uid}
            set={set.data}
            href={`/stills/${set.uid}`}
          />
        )
      })}
    </div>
  )
}

export default Index
