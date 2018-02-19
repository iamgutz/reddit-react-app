export const decodeUri = (uriString) => uriString && uriString.replace(/\&amp;/g,'&')

export const decodeHtmlTags = (htmlString) => {
  if (!htmlString) return

  const htmlStringOpenTags = htmlString.replace(/\&lt;/g, '<')
  const htmlStringCloseTags = htmlStringOpenTags.replace(/\&gt;/g, '>')

  return htmlStringCloseTags
}
