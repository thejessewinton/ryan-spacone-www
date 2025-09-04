export const getImageUrl = (url: string) => {
  return `${url}`
}

export const getBlurUrl = (url: string) => {
  return `${url}&q=20&blur=200`
}

export const getVideoUrl = (url: string) => {
  const id = url.split('/').pop()
  if (!id) throw new Error('Could not get ID from URL')

  return `https://player.vimeo.com/video/${id}?&autoplay=1&title=0&byline=0&portrait=0&badge=0`
}

export const getPreviewUrl = (html: string) => {
  const src = html.match(/src="([^"]+)"/)?.[1]
  if (!src) throw new Error('Could not get src from HTML')

  return `${src}&background=1&autoplay=0`
}
