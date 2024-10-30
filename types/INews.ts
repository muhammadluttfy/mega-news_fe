export interface Source {
  id: string | null
  name: string
}

export interface Article {
  source: Source
  author: string | null
  title: string
  description: string
  url: string
  urlToImage: string | null
  publishedAt: string
  content: string
}

export interface INews {
  articles: Article[]
  status: string
  totalResults: number
}
