import axios from 'axios'
import * as cheerio from 'cheerio'

export async function fetchPingyam (input: string) {
  const params = new URLSearchParams({
    input,
    kpc_selectpingyam: 'py_jyutping',
    kpc_display_mode: 'kpc_display_mode_ruby_1_on_1',
  }).toString().replaceAll('%0A', '%0D%0A')

  const { data } = await axios.post(
    'https://hongkongvision.com/tool/cc_py_conv_zh',
    params
  )
  const $ = cheerio.load(data)
  const $result = $('.borderS')

  return $result.html()
}
