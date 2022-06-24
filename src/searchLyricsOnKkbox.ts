import * as cheerio from 'cheerio'
import { axiosWithHeaders } from './axiosWithHeaders'
import { searchOnGoogle } from './searchOnGoogle'

async function getKkboxLink (keyword: string) {
  const data = await searchOnGoogle(`${keyword}+歌詞+site:www.kkbox.com`)
  const $ = cheerio.load(data)

  const $results = $('#rso a')
  const $firstResult = $results.first()

  const link = $firstResult.attr('href')

  return link
}

async function getLyrics (link: string) {
  const { data } = await axiosWithHeaders.get(link)
  const $ = cheerio.load(data)

  const $lyrics = $('.lyrics').first()
  const lyrics = $lyrics.text()
    .trim()
    .split('\n')
    .map(line => line.trim())
    .join('\n')

  return lyrics
}

export async function searchLyricsOnKkbox (keyword: string) {
  const link = await getKkboxLink(keyword)
  if (!link) throw new Error()

  const lyrics = await getLyrics(link)

  return lyrics
}
