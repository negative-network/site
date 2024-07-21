import type { APIRoute } from 'astro'
import { getImage } from 'astro:assets'
// import favicon from '../assets/images/favicon.ico'
import favicon from '../assets/images/logo-NN-black.png';

const faviconPngSizes = [96, 96]

export const GET: APIRoute = async () => {
  const icons = await Promise.all(
    faviconPngSizes.map(async (size) => {
      const image = await getImage({
        src: favicon,
        width: size,
        height: size,
        format: 'png'
      })
      return {
        src: image.src,
        type: `image/${image.options.format}`,
        sizes: `${image.options.width}x${image.options.height}`
      }
    })
  )

  const manifest = {
    name: 'Negative Network - Agence Web',
    description: 'Le site vitrine de l\'agence web Negative Network',
    start_url: '/',
    display: 'standalone',
    id: 'nn-agence-web',
    icons
  }

  return new Response(JSON.stringify(manifest))
}
