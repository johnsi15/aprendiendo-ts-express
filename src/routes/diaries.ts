import express from 'express'
import { getEntries } from '../services/diariesServices'

const router = express.Router()

router.get('/', (_req, res) => {
  const entries = getEntries()
  res.send(entries)
})

router.post('/', (_req, res) => {
  res.send('Saving a diary!')
})

export default router
