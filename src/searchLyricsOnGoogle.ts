import * as cheerio from 'cheerio'
import { axiosWithHeaders } from './axiosWithHeaders'

export async function searchLyricsOnGoogle (keyword: string) {
  const { data } = await axiosWithHeaders.get(
    'https://www.google.com/search',
    {
      params: { q: `${keyword}+歌詞` },
      headers: {
        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36',
        'accept-language': 'zh-TW,zh;q=0.9',
      },
    }
  )
  const $ = cheerio.load(data)
  const $lyrics = $('[jsname="WbKHeb"]')
    .find('br')
    .replaceWith('\n')
    .end()

  return [...$lyrics.children()]
    .map($section => $($section).text())
    .join('\n'.repeat(2))
}
