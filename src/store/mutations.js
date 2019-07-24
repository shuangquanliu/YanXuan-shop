
 import {REISEIVE_HOMEDATA,REISEIVE_CATEGORY,REISEIVE_TUIJIAN,REISEIVE_HOTKEWORD,REISEIVE_SERCHKEYWORD,REISEIVE_PAGELIST} from './mutation-types.js'

 export default{
    [REISEIVE_HOMEDATA](state,homeData){
        state.homeData = homeData
    },
    [REISEIVE_CATEGORY](state,categoryData){
        state.categoryData = categoryData
    },
    [REISEIVE_TUIJIAN](state,tuijian){
        state.tuijian = tuijian
    },
    [REISEIVE_HOTKEWORD](state,list){
        state.hotKeyList = list
    },
    [REISEIVE_SERCHKEYWORD](state,keywords){
        state.serchKeyWord = keywords
    },
    [REISEIVE_PAGELIST](state,list){
        state.list = list
    }
 }