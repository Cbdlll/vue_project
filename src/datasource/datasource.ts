import type { Teacher, User } from '@/data/data'

export function listTeachers() {
  const teachers: Teacher[] = [
    { id: 1, name: 'BoBo', password: 'BoBo', count: 9, max_count: 10, level: 2 },
    { id: 2, name: 'teacher1', password: 'teacher1', count: 5, max_count: 10, level: 2 },
    { id: 3, name: 'teacher2', password: 'teacher2', count: 0, max_count: 10, level: 2 },
    { id: 4, name: 'teacher3', password: 'teacher3', count: 0, max_count: 10, level: 2 },
    { id: 5, name: 'teacher4', password: 'teacher4', count: 0, max_count: 10, level: 2 },
    { id: 6, name: 'teacher5', password: 'teacher5', count: 0, max_count: 10, level: 2 },
    { id: 7, name: 'teacher6', password: 'teacher6', count: 0, max_count: 10, level: 2 },
    { id: 8, name: 'teacher7', password: 'teacher7', count: 10, max_count: 10, level: 2 }
  ]
  return teachers
}

export function listStudents() {
  const students: User[] = [
    { id: 1, name: 'student1', password: 'student1', level: 1 },
    { id: 2, name: 'student2', password: 'student2', level: 1 },
    { id: 3, name: 'student3', password: 'student3', level: 1 },
    { id: 4, name: 'student4', password: 'student4', level: 1 },
    { id: 5, name: 'student5', password: 'student5', level: 1 },
    { id: 6, name: 'student6', password: 'student6', level: 1 },
    { id: 7, name: 'student7', password: 'student7', level: 1 },
    { id: 8, name: 'student8', password: 'student8', level: 1 }
  ]
  return students
}
