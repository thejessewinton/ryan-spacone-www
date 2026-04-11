import { getVideoUrl } from 'utils/get-url'
import type { ProjectDocumentData } from '../../../prismicio-types'

export const VimeoPlayer = ({
  video,
}: {
  video: ProjectDocumentData['video']
}) => {
  return (
    <div className="relative aspect-video w-full bg-neutral-900">
      <iframe
        src={getVideoUrl(video.embed_url)}
        className="h-full w-full"
        allowFullScreen
      />
    </div>
  )
}
