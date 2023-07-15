import { DiaryEntry } from '../types'
import diaryData from './diaries.json'
/**
 Array<DiaryEntry> === DiaryEntry[]
*/
const diaries: Array<DiaryEntry> = diaryData as Array<DiaryEntry>

export const getEntries = () => diaries

export const addEntry = () => null
