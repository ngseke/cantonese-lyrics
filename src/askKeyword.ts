import { prompt } from 'inquirer'

export async function askKeyword () {
  const argv = process.argv.slice(2)[0]
  if (argv) return argv

  const { keyword } = await prompt({
    name: 'keyword',
    message: '請輸入關鍵詞',
  })
  return keyword as string
}
