export interface Course {
  id?: number
  name?: string
  createTime?: string
}

export interface User {
  id?: number
  level?: number
  name?: string
  sex?: string
  title?: Title
  courses?: Course[]
}

export interface Title {
  id?: number
  name?: string
}

export interface ResultVO<T> {
  code: number
  message?: string
  data: T
}
