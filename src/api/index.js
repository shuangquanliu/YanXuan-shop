import ajax from './ajax.js'

const BASE = '/api'

//mock 数据----首页数据
export const reqHomeData = ()=> ajax('/homeData')
//mock 数据----分类数据
export const reqCategoryData = ()=> ajax('/categoryData')
//mock 数据----分类列表
export const reqCategoryListData = ()=> ajax('/categoryList')
//mock 数据----分类列表
export const reqtuijianData = ()=> ajax('/tuijian')