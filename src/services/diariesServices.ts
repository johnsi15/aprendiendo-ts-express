import { DiaryEntry } from '../types'
import diaryData from './diaries.json'
/**
 Array<DiaryEntry> === DiaryEntry[]
*/
// const diaries: Array<DiaryEntry> = diaryData as Array<DiaryEntry>
const diaries: DiaryEntry[] = diaryData as DiaryEntry[]
// se usa as para indicarle a typescript,
// que la data que viene del json tiene que tratarla con mis types, esto se usa en este caso o en llamadas fetch

export const getEntries = (): DiaryEntry[] => diaries

export const addEntry = (): null => null
