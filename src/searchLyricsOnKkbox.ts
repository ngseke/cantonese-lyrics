import * as cheerio from 'cheerio'
import { axiosWithHeaders } from './axiosWithHeaders'

async function getKkboxLink (keyword: string) {
  const { data } = await axiosWithHeaders.get(
    'https://www.google.com/search',
    {
      params: { q: `${keyword}+歌詞+site:www.kkbox.com` },
      headers: {
        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36',
        'accept-language': 'zh-TW,zh;q=0.9',
      },
    }
  )
  const $ = cheerio.load(data)

  const $results = $('#rso a')
  const $firstResult = $($results.first())

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
