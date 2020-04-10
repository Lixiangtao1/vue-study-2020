import fetch from './../../utils/fetech.js'

export function GetData(params) {
  return fetch({
    url: 'http://123.207.32.32:8000/home/multidata',
    methods: 'get',
    params
  })
}

export function GetMember(params) {
  return fetch({
    url: 'http://172.22.80.32:12003/api/saas-crm-member/member',
    methods: 'get',
    params
  })
}