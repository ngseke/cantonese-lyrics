import { askKeyword } from './src/askKeyword'
import { fetchLyrics } from './src/fetchLyrics'
import { fetchPingyam } from './src/fetchPingyam'
import { startAndOpen } from './src/server'

async function run () {
  const keyword = await askKeyword()
  if (!keyword) process.exit(1)

  console.log(`🔍 Searching ${keyword}...`)

  const lyrics = await fetchLyrics(keyword)
  const result = await fetchPingyam(lyrics)

  if (result) {
    startAndOpen(keyword, result)
  } else {
    console.log('😶 找不到結果')
  }
}

run()
