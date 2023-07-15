import express from 'express'

const router = express.Router()

router.get('/', (_res, res) => {
  res.send('Fetching all entry diaries')
})

router.post('/', (_red, res) => {
  res.send('Saving a diary!')
})

export default router