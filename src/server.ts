import pug from 'pug'
import express from 'express'
import open from 'open'

const compiledFunction = pug.compileFile('./src/template.pug')

function createPage (lyrics: string) {
  const html = compiledFunction({
    lyrics,
  })
  return html
}

export function start (lyrics: string) {
  const port = 9999
  const app = express()
  app.get('*', (req, res) => {
    res.send(createPage(lyrics))
  })
  app.listen(port, () => {
    console.log('✅')
    open(`http://localhost:${port}`)
  })
}
