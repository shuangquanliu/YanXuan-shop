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

//热搜列表的接口
export const reqHotWord = ()=> ajax(BASE+'/xhr/search/init.json')
//关键字搜索列表
export const reqHotkeywords = (keywordPrefix)=> ajax(BASE+'/xhr/search/searchAutoComplete.json',{keywordPrefix})
//上拉加载列表
export const reqList = (page,size)=> ajax(BASE + '/topic/v1/find/recAuto.json',{page,size})