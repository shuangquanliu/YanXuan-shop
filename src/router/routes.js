const Home = ()=> import('../pages/Home/Home.vue')
const Category = ()=> import('../pages/Category/Category.vue')
const Display = ()=> import('../pages/Display/Display.vue')
const ShopCart = ()=> import('../pages/ShopCart/ShopCart.vue')
const Profile = ()=> import('../pages/Profile/Profile.vue')
const Login = ()=>import('../pages/Login/Login.vue')
const Search = ()=> import('../pages/Search/Search.vue')
const EmailRegister = ()=> import('../pages/EmailRegister/EmailRegister.vue')
// const Discover= ()=> import('../pages/Display/Discover/Discover.vue')
import DisplayList from '../pages/Display/DisplayList/DisplayList.vue'
import Expert from '../pages/Expert/Expert.vue'
import categoryList from '../pages/Category/CategoryList/categoryList.vue'
export default[
    {
        path:'/search',
        component:Search
    },
    {
        path:'/email',
        component:EmailRegister
    },
    {
        path:'/home',
        component:Home,
        meta:{
            isFooterShow:true
        }
    },
    {
        path:'/category',
        component:Category,
        meta:{
            isFooterShow:true
        },
        children:[
           {
              path:'/category/categorylist',
              component:categoryList,
              meta:{
                isFooterShow:true
             }
           },
           {
            path:'/category',
            redirect:"/category/categorylist"
          }
        ]
    },
    {
        path:'/display',
        component:Display,
        meta:{
            isFooterShow:true
        },
        children:[
            {
                path:'/display/displaylist',
                component:DisplayList,
                meta:{
                    isFooterShow:true
                }
            },
            {
               path:'',
               redirect:'/display/displaylist' ,
            }
        ]
        
    },
    {
        path:'/expert',
        component:Expert
    },
    {
        path:'/shopcart',
        component:ShopCart,
        meta:{
            isFooterShow:true
        }
    },
    {
        path:'/profile',
        component:Profile,
        meta:{
            isFooterShow:true
        }
    },
    {
        path:'/login',
        component:Login
    },
    {
        path:'/',
        redirect: '/home'
    },
    
]