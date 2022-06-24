import { fetchLyrics } from './src/fetchLyrics'
import { fetchPingyam } from './src/fetchPingyam'

import { start } from './src/server'

const keyword = '人類不宜飛行'

async function run () {
  const lyrics = await fetchLyrics(keyword)
  const result = await fetchPingyam(lyrics)

  if (result) start(result)
}

run()
