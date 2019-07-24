
import {reqHomeData,reqCategoryData,reqtuijianData,reqHotWord,reqHotkeywords,reqList} from '../api/index.js'

import {REISEIVE_HOMEDATA,REISEIVE_CATEGORY,REISEIVE_TUIJIAN,REISEIVE_HOTKEWORD,REISEIVE_SERCHKEYWORD,REISEIVE_PAGELIST} from './mutation-types.js'


export default{
    //异步获取主业数据
    async getHomeData({commit}){
        const result = await reqHomeData()
        if(result.code === 0){
            const homeData = result.data
            commit(REISEIVE_HOMEDATA,homeData)
        }     
    },
    //异步获取分类数据及分类列表
    async getCategory({commit}){
        const result = await reqCategoryData()
        if(result.code === 0){
            const categoryData = result.data
            commit(REISEIVE_CATEGORY,categoryData)
        }
    },
    //异步获取推荐列表
    async gettujianData({commit}){

        const result  = await reqtuijianData()
        // console.log(result)
        if(result.code === 0){
            commit(REISEIVE_TUIJIAN,result.data.data)
        }
    },
    //异步请求热搜列表
    async getHotKeyList({commit}){
        const result = await reqHotWord()
        if(result.code === '200'){
            commit(REISEIVE_HOTKEWORD,result.data)
        }
    },
    //异步关键字对应的产品列表
    async getSearchKeyWords({commit},val){
        // console.log(val)
        const result = await reqHotkeywords(val)
        commit(REISEIVE_SERCHKEYWORD,result.data)
    },
    //异步获取每页列表
    async getPageList({commit},data){
        const {page,size} = data
        const result = await reqList(page,size)
        // console.log(result)  
        commit(REISEIVE_PAGELIST,result.data)
    }
}