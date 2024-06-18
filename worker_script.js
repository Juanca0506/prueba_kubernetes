addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request))
  })
  
  async function handleRequest(request) {
    const url = new URL(request.url)
    const params = new URLSearchParams(url.search)
  
    
    const imageUrl = params.get('url')
    const width = params.get('width')
    const height = params.get('height')
  
    if (!imageUrl || !width || !height) {
      return new Response('Missing parameters', { status: 400 })
    }
  
    
    const response = await fetch(imageUrl)
    if (!response.ok) {
      return new Response('Image fetch failed', { status: 500 })
    }
  
    const image = await response.arrayBuffer()
  
    
    return new Response(image, {
      headers: {
        'Content-Type': 'image/jpeg',
        'Cache-Control': 'public, max-age=86400',
        'cf-image-resize': `width=${width},height=${height}`
      }
    })
  }
  