import axios from 'axios'

export interface Photo {
  id: string
  urls: {
    small: string
    regular: string
  }
}

interface UnsplashResponse {
  results: Photo[]
}

export async function searchPhotos(query: string, page: number): Promise<Photo[]> {
  try {
    const response = await axios.get<UnsplashResponse>('https://api.unsplash.com/search/photos', {
      params: {
        query,
        page,
        per_page: 12,
        client_id: '2AN79GUf2H2IOW6wtQwhn-dGW-PxDjr6IY3aCLPcZ7E',
      },
    })

    return response.data.results
  } catch (error) {
    console.error(error)
    throw new Error('Failed to fetch photos')
  }
}
