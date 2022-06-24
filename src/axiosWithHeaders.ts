import axios from 'axios'

export const axiosWithHeaders = axios.create({
  headers: {
    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36',
    'accept-language': 'zh-TW,zh;q=0.9',
  },
})
