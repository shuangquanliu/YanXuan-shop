
import {reqHomeData,reqCategoryData,reqtuijianData} from '../api/index.js'

import {REISEIVE_HOMEDATA,REISEIVE_CATEGORY,REISEIVE_TUIJIAN} from './mutation-types.js'

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
        if(result.code === 0){
            commit(REISEIVE_TUIJIAN,result.data)
        }
    }
}