export interface Show {
  id: number
  title: string
  cover: string
  overview: string
  genres: string[]
  year: number
  type: 'MOVIE' | 'SERIE'
}
