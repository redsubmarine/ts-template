import express from 'express'

const app = express()

interface Params {
  a: number
  b: number
}

type Add = (x: Params) => number

const add: Add = ({ a, b }) => a + b

app.get('/', (req, res) => {
  res.json({ sum: `${add({ a: 1, b: 2 })}` })
})

app.listen(3001, () => {
  console.log('started')
})
