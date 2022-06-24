import { axiosWithHeaders } from './axiosWithHeaders'

export async function searchOnGoogle (query: string) {
  const { data } = await axiosWithHeaders.get(
    'https://www.google.com/search',
    { params: { q: query } }
  )

  return data
}
