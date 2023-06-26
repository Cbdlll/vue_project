import type { Course, User, ResultVO } from '@/data/data'
import axios from '@/axios'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import router from '@/router'

export const useprojectStore = defineStore('ProjectStore', () => {
  const coursesS = ref<Course[]>([])
  const userS = ref<User>({})
  const getCoursesA = async () => {
    const resp = await axios.get<ResultVO<{ courses: Course[] }>>('getCourses')
    coursesS.value = resp.data.data?.courses
  }

  const loginA = async (data: { account: string; password: string }) => {
    // try可避免控制台的未捕获异常信息
    try {
      const resp = await axios.post<ResultVO<{ user: User }>>('login', data)
      sessionStorage.setItem('token', resp.headers.token)
      userS.value = resp.data.data?.user

      if (userS.value.level && userS.value.level == 1) router.push('home')
    } catch (error) {
      // eslint默认禁止空执行体。加一段注释或关闭该检测
    }
  }

  return {
    coursesS,
    userS,
    loginA,
    getCoursesA
  }
})
