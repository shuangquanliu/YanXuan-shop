const Home = ()=> import('../pages/Home/Home.vue')
const Category = ()=> import('../pages/Category/Category.vue')
const Display = ()=> import('../pages/Display/Display.vue')
const ShopCart = ()=> import('../pages/ShopCart/ShopCart.vue')
const Profile = ()=> import('../pages/Profile/Profile.vue')
const Login = ()=>import('../pages/Login/Login.vue')
// const Encumbered = ()=> import('../pages/Display/Encumbered/Encumbered.vue')
// const Discover= ()=> import('../pages/Display/Discover/Discover.vue')
import Discover from '../pages/Display/Discover/Discover.vue'
import Encumbered from '../pages/Display/Encumbered/Encumbered.vue'
export default[
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
        }
    },
    {
        path:'/display',
        component:Display,
        meta:{
            isFooterShow:true
        },
        children: [
            {
              path: '/dispaly/discover',
              component: Discover,
              meta:{
                isFooterShow:true
                }
            },
            {
              path: '/dispaly/encumbered',
              component: Encumbered
            },
            {
              path: '',
              redirect: '/dispaly/discover',
              meta:{
                isFooterShow:true
                }
            }
          ],
        
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