import express from 'express'
import * as diaryServices from '../services/diariesServices'

const router = express.Router()

router.get('/', (_req, res) => {
  const entries = diaryServices.getEntriesWithoutSensitiveInfo()
  res.send(entries)
})

router.get('/:id', (req, res) => {
  const diary = diaryServices.findByIdSensitive(+req.params.id)

  // return res.send(diary)
  return (diary != null) ? res.send(diary) : res.sendStatus(404)
})

router.post('/', (_req, res) => {
  res.send('Saving a diary!')
})

export default router
