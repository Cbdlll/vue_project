import axios from '@/axios'
import MockAdapter from 'axios-mock-adapter'
import type { ResultVO } from '@/data/data'

const mock = new MockAdapter(axios)
// 过滤http前缀请求
mock.onAny(/^http/).passThrough()
mock.onAny(/^\/api\//).passThrough()

const resulVO: ResultVO<{}> = {
  code: 200,
  data: {}
}

mock.onPost('login').reply((c) => {
  // 获取请求数据
  // 此时请求的js对象已转为json字符串。因此需要转换回JS对象
  const data = c.data

  const { account, password } = JSON.parse(data)
  if (account == '1' && password == '1') {
    resulVO.code = 200
    resulVO.data = { role: '243f45a3ce', user: { level: 1 } }
    resulVO.message = ''
    return [
      200,
      resulVO,
      {
        token:
          '744193c872b677aab12a0ced447882f4cf9fca92a09d428a26ed145ed2ed2eec665c8824ebc353042ba2be136efcb5c6'
      }
    ]
  }
  resulVO.code = 401
  resulVO.message = '用户名密码错误'
  return [200, resulVO]
})
