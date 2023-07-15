import express from 'express'
import diaryRouter from './routes/diaeries'

const app = express()
app.use(express.json())

const PORT  = 3000

app.get('/ping', (_req, res) => {
  console.log('someone pinged here!! John')
  res.send('pong')
})

app.use('/api/diaries', diaryRouter)


app.listen(PORT, () => {
  console.log(`Server runnig on port ${PORT}`)
})