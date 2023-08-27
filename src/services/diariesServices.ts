import { DiaryEntry, NewDiaryEntry, NonSensitiveInfoDiaryEntry } from '../types'
import diaryData from './diaries.json'
/**
 Array<DiaryEntry> === DiaryEntry[]
*/
// const diaries: Array<DiaryEntry> = diaryData as Array<DiaryEntry>
const diaries: DiaryEntry[] = diaryData as DiaryEntry[]
// se usa as para indicarle a typescript,
// que la data que viene del json tiene que tratarla con mis types, esto se usa en este caso o en llamadas fetch

export const getEntries = (): DiaryEntry[] => diaries

export const findById = (id: number): DiaryEntry | undefined => {
  const entry = diaries.find(d => d.id === id)

  return entry
}

export const findByIdSensitive = (id: number): NonSensitiveInfoDiaryEntry | undefined => {
  const entry = diaries.find(d => d.id === id)

  if (entry != null) {
    const { comment, ...rest } = entry

    return rest
  }

  return undefined // <- "noImplicitReturns": true, config TypeScript
}

export const getEntriesWithoutSensitiveInfo = (): NonSensitiveInfoDiaryEntry[] => {
  return diaries.map(({ comment, ...rest }) => rest)
}

export const addDiary = (newDiaryEntry: NewDiaryEntry): DiaryEntry => {
  const newDiary = {
    id: Math.max(...diaries.map(d => d.id)) + 1,
    ...newDiaryEntry
  }

  diaries.push(newDiary)
  return newDiary
}
