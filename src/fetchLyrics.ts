import axios from 'axios'
import * as cheerio from 'cheerio'

export async function fetchLyrics (keyword: string) {
  const { data } = await axios.get(
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
  const $lyrics = $('[data-lyricid] > div:nth-child(1) > div:nth-child(2)')
    .find('br')
    .replaceWith('\n')
    .end()

  return $lyrics.text()
}
