
 import {REISEIVE_HOMEDATA,REISEIVE_CATEGORY,REISEIVE_TUIJIAN} from './mutation-types.js'

 export default{
    [REISEIVE_HOMEDATA](state,homeData){
        state.homeData = homeData
    },
    [REISEIVE_CATEGORY](state,categoryData){
        state.categoryData = categoryData
    },
    [REISEIVE_TUIJIAN](state,tujian){
        state.categoryData = tujian
    }
 }