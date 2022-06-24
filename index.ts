import { fetchLyrics } from './src/fetchLyrics'
import { fetchPingyam } from './src/fetchPingyam'

const keyword = '人類不宜飛行'

async function run () {
  const lyrics = await fetchLyrics(keyword)
  const result = await fetchPingyam(lyrics)

  console.log(result)
}

run()
