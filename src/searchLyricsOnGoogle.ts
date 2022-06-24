import * as cheerio from 'cheerio'
import { searchOnGoogle } from './searchOnGoogle'

export async function searchLyricsOnGoogle (keyword: string) {
  const data = await searchOnGoogle(`${keyword}+歌詞`)
  const $ = cheerio.load(data)
  const $lyrics = $('[jsname="WbKHeb"]')
    .find('br')
    .replaceWith('\n')
    .end()

  return [...$lyrics.children()]
    .map($section => $($section).text())
    .join('\n'.repeat(2))
}
