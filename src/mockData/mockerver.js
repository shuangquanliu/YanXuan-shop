import Mock from 'mockjs'
import homeData from './homeData.json'
import categoryData from './category.json'
import categoryListData from './categoryList.json'
import tuijianData from './tuijianData.json'

Mock.mock('/homeData',{code:0,data:homeData})
Mock.mock('/categoryData',{code:0,data:categoryData})
Mock.mock('/categoryListData',{code:0,data:categoryListData})
Mock.mock('/tuijian',{code:0,data:tuijianData})
