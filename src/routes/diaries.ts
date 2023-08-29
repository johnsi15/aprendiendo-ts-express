import express from 'express'
import * as diaryServices from '../services/diariesServices'
import toNewDiaryEntry from '../utils'

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

router.post('/', (req, res) => {
  try {
    // const { date, weather, visibility, comment } = req.body // by default the types are any
    const newDiaryEntry = toNewDiaryEntry(req.body)
    const addedDiary = diaryServices.addDiary(newDiaryEntry)

    res.json(addedDiary)
  } catch (e: any) {
    res.status(400).send(e.message)
  }
})

export default router
