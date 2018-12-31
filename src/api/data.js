import ajaxFunc from 'http/ajax'

export const fetchRatings = ajaxFunc('/ratings', 'get')
export const fetchGoods = ajaxFunc('/goods')
export const fetchSeller = ajaxFunc('/seller')

