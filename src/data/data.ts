export interface Teacher {
  id?: number
  level?: number
  name?: string
  password?: string
  count?: number
  max_count?: number
  students?: User[]
}

export interface User {
  id?: number
  level?: number
  name?: string
  password?: string
  teacher?: Teacher
}

export interface ResultVO<T> {
  code: number
  message?: string
  data: T
}
