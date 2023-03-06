import request from '@/utils/request'

// 查询操作日志列表
export function list(query) {
  return request({
    url: '/system/operationLog/pageQuery',
    method: 'get',
    params: query
  })
}

// 删除操作日志
export function delOperlog(operId) {
  return request({
    url: '/system/operationLog/' + operId,
    method: 'delete'
  })
}

// 清空操作日志
export function cleanOperlog() {
  return request({
    url: '/system/operationLog/clean',
    method: 'delete'
  })
}
