const Home = ()=> import('../pages/Home/Home.vue')
const Category = ()=> import('../pages/Category/Category.vue')
const Display = ()=> import('../pages/Display/Display.vue')
const ShopCart = ()=> import('../pages/ShopCart/ShopCart.vue')
const Profile = ()=> import('../pages/Profile/Profile.vue')

export default[
    {
        path:'/home',
        component:Home
    },
    {
        path:'/category',
        component:Category
    },
    {
        path:'/display',
        component:Display
    },
    {
        path:'/shopcart',
        component:ShopCart
    },
    {
        path:'/profile',
        component:Profile
    },
    {
        path:'/',
        redirect: '/home'
    },
    
]