import { env } from '~/env'

import type { IPal } from './interfaces'

export interface ParamsSchema {
  page?: number //The page number you want to get. Default is 1.
  limit?: number //The number of results you want to get. Default is 10.
  name?: string //The name of the Pal you want to get.
  types?: string //The type of the Pal you want to get.
  suitability?: string //The suitability of the Pal you want to get.
  drops?: string //The drop of the Pal you want to get.
  key?: string //The key of the Pal you want to get.
  term?: string //The term you want to search.
}

export interface DataSchema {
  content: IPal[]
  page: number
  limit: number
  count: number
  total: number
}

export async function getPals(
  params: ParamsSchema = {
    limit: 24,
  },
): Promise<DataSchema> {
  const apiUrl =
    env.API_URL +
    '?' +
    new URLSearchParams(params as Record<string, string>).toString()
  return fetch(apiUrl).then((res) => res.json() as Promise<DataSchema>)
}
