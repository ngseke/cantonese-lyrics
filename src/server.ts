import pug from 'pug'
import express from 'express'
import open from 'open'

function createPage (lyrics: string) {
  const compiledFunction = pug.compileFile('./src/template.pug')
  const html = compiledFunction({
    lyrics,
  })
  return html
}

export function start (lyrics: string) {
  const port = 9999
  const app = express()
  app.get('*', (req, res) => {
    res.on('finish', () => {
      console.log('✅')
      process.exit(0)
    })
    res.send(createPage(lyrics))
    res.end()
  })

  app.listen(port, () => {
    open(`http://localhost:${port}`)
  })
}
