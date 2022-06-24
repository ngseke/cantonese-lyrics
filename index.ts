import { askKeyword } from './src/askKeyword'
import { searchLyricsOnGoogle } from './src/searchLyricsOnGoogle'
import { searchLyricsOnKkbox } from './src/searchLyricsOnKkbox'
import { fetchPingyam } from './src/fetchPingyam'
import { startAndOpen } from './src/server'

async function run () {
  const keyword = await askKeyword()
  if (!keyword) process.exit(1)

  console.log(`🔍 Searching "${keyword}"...`)
  let lyrics = await searchLyricsOnKkbox(keyword)

  if (!lyrics) {
    console.log(`🔍 Searching "${keyword}"....`)
    lyrics = await searchLyricsOnGoogle(keyword)
  }

  if (!lyrics) {
    console.log('😶 找不到結果')
    process.exit()
  }

  console.log('🔄 Converting...')
  const result = await fetchPingyam(lyrics)

  if (result) {
    startAndOpen(keyword, result)
    console.log('✅')
  } else {
    console.log('😶 轉換失敗')
  }
}

run()
