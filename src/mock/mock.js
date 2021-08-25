import Mock from 'mockjs'

Mock.mock('http://localhost:8081/api/web/login', 'post', {
  'msg': 'success'
})

Mock.mock('http://localhost:8081/api/web/logout', 'post', {
  'msg': 'success'
})
